var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req._subdomainLevel);
  res.render('index');
});

module.exports = router;
