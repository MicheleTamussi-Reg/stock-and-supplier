// test per la ricerca del nome
const nomeP = require("./sceltaNome");
test("inserimento di un nome valido", () => {   

    expect(typeof nomeP).toBe('string');
})

// test per la quantità del prodotto
const qntP = require ("./sceltaQnt");

test("inserimento di una quantità valida", () => {
    

    expect(qntP).toBeGreaterThan(0);
})

// test per la comparazione tra il nome scelto e quello presente
const mysql = require('mysql2');
test("presenza del nome del prodotto cercato nel database", () => {
    

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test ingresso 01'
    }); 
        // fetch per i dati
      con.promise()
      .execute("SELECT * FROM `prodotti`")
      .then(([rows]) => {
             expect(rows[0].nome).toEqual(nomeP());

      }).catch(err => {
          console.log(err);
      });
      con.end();

})
// test per la comparazione tra la qnt scelta e quella presente
test("presenza della quantità di prodotto cercato nel database", () => {
    

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test ingresso 01'
    }); 
        // fetch per i dati
      con.promise()
      .execute("SELECT * FROM `vende`")
      .then(([rows]) => {
             //return console.log(nomeTrovato);
             expect(rows[0].quantita).toBeGreaterThan(qntP());

      }).catch(err => {
          console.log(err);
      });
      con.end();

})

//test per la fattibilità del prezzo minore trovato
test("determinazione del prezzo senza sconto del possibile acquisto in stock", () => {
    

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test ingresso 01'
    }); 
    con.promise()
      .execute
      ("SELECT MIN(vende.costo) FROM vende JOIN prodotti ON vende.idProdotto=prodotti.idProdotto WHERE prodotti.nome=(" + nomeP + ");")
      .then(([rows]) => {
          expect(rows[0]).toBeGreaterThan(0);
      }).catch(err => {
          console.log(err);
      });   
      con.end();

})

// test per la coerenza delle operazioni di sconto
test("determinazione dello sconto possibile", () => {
    

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test ingresso 01'
    }); 
    con.promise()
      .execute
      ("SELECT * FROM sconti")
      .then(([rows]) => {
          expect(rows[0]).toBeGreaterThan(0);
      }).catch(err => {
          console.log(err);
      });   
      con.end();
})



 
