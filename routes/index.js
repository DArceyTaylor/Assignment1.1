var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});
/* GET Services page. */
router.get('/Services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET Contact Me page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
