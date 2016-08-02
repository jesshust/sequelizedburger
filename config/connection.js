//setup the code to connect Node to MySQL
var mysql = require('mysql'); 


var connection; 

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
	connection = mysql.createConnection({	 
	host:'localhost', 
	user: 'root', 
	password: '',
	database: 'burgers_db'
	})
};  

connection.connect(); 

//export the connection 
module.exports = connection; 