var express = require('express');
var router = express.Router();
const people = require('../people.json'); 

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Poeti (Clicca sul nome per vedere le specifiche)',
    people: people.persone 
  });
});

module.exports = router;
