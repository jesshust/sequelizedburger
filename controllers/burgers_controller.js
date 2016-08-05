var express = require('express');  
var router = express.Router(); 

var models = require('../models'); 

router.get('/', function(req, res){
	res.redirect('/burgers')
}); 

router.get('/burgers', function(req, res){
	models.burger.selectAll(function(data){
		var hbsObject = { burgers : data }
		res.render('index', hbsObject); 
	}); 
}); 

router.post('/burgers/create', function(req, res){
	models.burger.insertOne(['burger_name', 'devoured'], [req.body.name, 0], function(data){
		res.redirect('/burgers'); 
	}); 
}); 

router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	models.burger.updateOne({'devoured' : 1}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;