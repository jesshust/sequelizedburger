//orm.js interacts with MySQL db burgers_db

//require connection.js file
var connection = require('../config/connection.js'); 

//ORM

function printQuestionMarks(num){
	var arr = []; 

	for (var i = 0; i < num; i++){
		arr.push('?')
	}

	return arr.toString(); 
}

function objToSql(ob){
	var arr = []; 

	for (var key in ob) {
		arr.push(key + '=' + ob[key]); 
	}

	return arr.toString(); 
}

var orm = {

	//query that selects all 
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ' + tableInput + ';'; 
		connection.query(queryString, function(err, result){
			if(err) throw err; 
			cb(result); 
		}); 
		
	}, 
	//query that inserts a new burger
	insertOne: function(table, cols, vals, cb){
		var queryString ='INSERT INTO ' + table; 

		queryString = queryString + ' ('; 
		queryString = queryString + cols.toString(); 
		queryString = queryString + ') VALUES ('; 
		queryString = queryString + printQuestionMarks(vals.length); 
		queryString = queryString + ') '; 

		connection.query(queryString, vals, function(err, result){
			if(err) throw err; 
			cb(result); 
		}); 
	}, 
	//cols and vals that you want to update ex {name: panther, sleepy: true}
	updateOne: function(table, objColVals, condition, cb){
		var queryString = 'UPDATE ' + table; 

		queryString = queryString + ' SET '; 
		queryString = queryString + objToSql(objColVals); 
		queryString = queryString + ' WHERE '; 
		queryString = queryString + condition; 

		connection.query(queryString, function(err, result){
			if(err) throw err; 
			cb(result); 
		}); 
	}
}; 

//export orm object
module.exports = orm;