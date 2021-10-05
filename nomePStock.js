function nomePStock(){
    const mysql = require('mysql');
    const nomeScelto = require('./sceltaNome');
    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test ingresso 01'
    }); 
  
// controllo la presenza del prodott inserito nel database e in caso non venga trovato viene interrotto 
// il programma
    con.query("SELECT * FROM `prodotti` WHERE prodotti.nome='" + nomeScelto + "';",function(err,rows){
        if(err) throw err.code;
        const nomeTrovato = rows[0].nome.trim().toLowerCase();
        const idProdottoTrovato = rows[0].idProdotto;

        if (nomeTrovato !== nomeScelto){

            console.log("il prodotto scelto non è disponibile");

        }
// se il prodotto viene trovato vengono eseguiti i restanti moduli
    else  {

        console.log("corrispondenza nel database: " + nomeTrovato + " ID: "+idProdottoTrovato);
        const qntInStock = require('./qntPStock');
        
    }  
        con.end();
    });
}
nomePStock();
module.exports = nomePStock;
