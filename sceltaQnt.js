function sceltaQnt(){
    // richiedo libreria "readline per l'input da terminale"
    const readlineSync = require("readline-sync");
    // rendo l'input un numero intero 
    let input = parseInt(readlineSync.question('inserisci la quantita desiderata: '), 10);
    return input;
}
module.exports = sceltaQnt();