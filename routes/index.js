var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('server', { title: 'Express' });
});
/* GET About page. */
router.get('/', function(req, res, next) {
  res.render('server', { title: 'Express' });
});
/* GET Projects page. */
router.get('/', function(req, res, next) {
  res.render('server', { title: 'Express' });
});
/* GET Services page. */
router.get('/', function(req, res, next) {
  res.render('server', { title: 'Express' });
});
/* GET Contact Me page. */
router.get('/', function(req, res, next) {
  res.render('server', { title: 'Express' });
});

module.exports = router;
