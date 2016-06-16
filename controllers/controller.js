var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.send('root');
});

router.get('/joe', function(req,res){
  res.send('Joe');
});

router.get('/tims', function(req,res){
  res.send('david');
  console.log('tacos');
});


router.get('david',function(req.res){
  res.send('tims')
  console.log('pizza')
});

module.exports = router;
