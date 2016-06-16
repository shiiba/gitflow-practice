var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.send('root');
});

router.get('/joe', function(req,res){
  res.send('Joe');
});

module.exports = router;
