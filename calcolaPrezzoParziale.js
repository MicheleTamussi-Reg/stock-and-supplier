let prezzoParziale;
 function calcoloPrezzoParziale() {
    const nomeP = require("./sceltaNome"); //memorizzo il nome del prodotto scelto
    const qntP = require ("./sceltaQnt"); // memorizzo la quantità scelta
    const mysql = require('mysql');
    // query di interrogazione
    const queryPrezzo = "SELECT MIN(vende.costo) AS prezzominore, idFornitore FROM vende JOIN prodotti ON vende.idProdotto=prodotti.idProdotto WHERE prodotti.nome='" + nomeP + "';";
    // creo la connessione al database
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test ingresso 01'
    }); 

  // eseguo la query e in caso di errore lo lancio
    con.query(queryPrezzo,function(err,result){
        if(err) throw err;
        const prezzoMinore = result[0].prezzominore;
        const idFornitore = result[0].idFornitore; //cerco il  minore tra i prezzi per singolo prodotto
        console.log("prezzo minore per singolo pezzo: "+ prezzoMinore+"€");
        prezzoParziale = prezzoMinore * qntP; 
        console.log("prezzo totale non scontato: "+prezzoParziale+"€"); 
        console.log("dal fornitore con ID: " + idFornitore);
    });
    
    // seleziono i possibili tipi di sconto e i relativi parametri per il calcolo
    const querySconto = "SELECT sconti.tipo AS tipo,sconti.percentuale AS percentuale,sconti.parametro AS parametro FROM applicati JOIN sconti ON applicati.idSconto=sconti.idSconto";
    let prezzoFinale=0;
    con.query(querySconto,function(err,result2){
        if(err) throw err;
        if (result2[0].tipo === "c"){ // controllo se il tipo di sconto è "costo"
            const percentuale = result2[0].percentuale;
            const parametro = result2[0].parametro;
            if (parametro<=prezzoParziale){
                let temp = prezzoParziale/100*percentuale; // calcolo il prezzo finale con sconto
                prezzoFinale = prezzoParziale-temp;
                console.log("il prezzo con lo sconto è: "+prezzoFinale+"€");
            }
            else console.log("nessuno sconto previsto per questo ordine: costo non sufficiente");
        }
        else if (result2[0].tipo === "q"){ // controllo se il tipo di sconto è "quantità"
            const percentuale = result2[0].percentuale;
            const parametro = result2[0].parametro;
            if (parametro<=qntP){
                let temp = prezzoParziale/100*percentuale;
                prezzoFinale = prezzoParziale-temp;
                console.log("il prezzo con lo sconto è: "+prezzoFinale+"€");
            } 
        }
        else console.log("nessuno sconto previsto per questo ordine: quantità non sufficiente");
        con.end();  
    });
}
calcoloPrezzoParziale();
module.exports =calcoloPrezzoParziale;
