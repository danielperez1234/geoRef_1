var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/gotousers', function(req, res, next) {
  res.redirect('/users');
});
module.exports = router;
