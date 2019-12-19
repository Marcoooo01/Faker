var createError = require('http-errors'); //Importo la libreria per la gestione degli errori
var express = require('express');
var router = express.Router();
var faker = require('faker');
var people = require("../people.json");
/* GET home page. */

router.get('/:number/', function(req, res, next){
 //Se countryjs non trova il codice state allora ritorna una variabile undefined.
 //In questo caso richiamiamo la funzione next che passa l'errore al gestore degli errori
 //Il gestore degli errori è stato definito nell'app.js
 let poeta = people.persone.find(p => p.number == req.params.number)
 if (poeta === "undefined") {
   return next(createError(404, 'Persona non trovata'));
 }
 else
 {
   res.render('specifiche', {
    title: `Specifiche per: ${poeta.name}`,
    poeta,
  }); ; 
 }
})

module.exports = router;