var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(ROOT_PATH + '/public/app/index.html'); 
	//res.render('index', { title: 'Express' });
});

module.exports = router;
