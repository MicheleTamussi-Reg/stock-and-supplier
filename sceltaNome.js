function sceltaNome(){
    // richiedo libreria "readline per l'input da terminale"
    const readlineSync = require("readline-sync"); 
    // dichiaro la variabile input e la ottimizzo senza spazi e/o maiuscole
    let input = readlineSync.question('inserisci il nome del prodotto: ').trim().toLowerCase();
    return input;
}
module.exports = sceltaNome();