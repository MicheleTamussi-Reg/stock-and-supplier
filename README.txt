L'applicazione consiste in diversi moduli in comunicazione tra loro.
Il modulo principale "app.js" richiamerà tutti i moduli necessari all'ottempramento delle funzioni.
Verranno chiamati diversi moduli: il primo "SceltaNome" consiste nel primo input da fornire al programma: grazie alla libreria readline-sync
è possibile chiedere all'utente in input il nome del prodotto da ricercare.
il secondo modulo: "sceltaQnt", tramite la stessa libreria, permette di prendere in input la quantità di prodotto desiderata.
il terzo modulo, "nomePStock" effettua una ricerca nel database, confrontando il parametro nome scelto dall'utente con il risultato riscontrato nel database.
il quarto modulo si occupa di confrontare la quantità richiesta dall'utente con le quantità presenti in magazzino dei singoli supplier
in questo modo possiamo sapere con certezza quale fornitore ha abbastanza prodotto per soddisfare le nostre necessità.
il modulo "calcolaPrezzoParziale" si suddivide in due funzioni: in una andrà a calcolare il prezzo totale dell'ordine, grazie
alle informazione del database e alla quantità possibile dell'ordine la seconda funzione andrà ad elaborare il possibile sconto a seconda del fornitore più conveniente
verrà quindi presentato il prezzo totale - gli sconti(se applicabili su quella precisa operazione).
è presente, infine, un modulo contenente i vari test, ogni test controlla che i valori ritornati dalle singole funzioni rispecchino certi criteri
di fattibilità.
