var express = require('express'); 
var methodOverride = require('method-override'); 
var bodyParser = require('body-parser'); 
var router = express.Router(); 
var app = express(); 

var burger = require('../models/burger.js'); 

router.get('/', function(req, res){
	res.redirect('/burgers')
}); 

router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {burgers : data}
		res.render('index', hbsObject); 
	}); 
}); 

router.post('/burgers/create', function(req, res){
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, 0], function(data){
		res.redirect('/burgers'); 
	}); 
}); 

router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({'devoured' : 1}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;