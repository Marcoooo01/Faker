var express = require('express');
var router = express.Router();
const people = require('../people.json'); 

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Poeti',
    people: people.persone 
  });
});

module.exports = router;
