var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', {
	title: 'after-words.net',
	executives: ['Eric', 'Blair', 'Scott']
  });
});

module.exports = router;