// controllo la presenza di un quantitativo adeguato di prodtto nel database
const qntScelta = require('./sceltaQnt');
        function qntPStock(){

            const mysql = require('mysql2');
            let con = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'test ingresso 01'

            }); 

            con.query("SELECT idFornitore,quantita FROM `vende`",function(err,rows){
                if(err) throw err;
                for(let i = 0; i < rows.length; i++){
                    if(qntScelta <= rows[i].quantita){
                        
                        const prezzoParziale = require('./calcolaPrezzoParziale'); 
                    }  
                }
               con.end();  
            });
        }
qntPStock();
module.exports = qntPStock;