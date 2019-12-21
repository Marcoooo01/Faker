var express = require('express');
var router = express.Router();
const people = require('../people.json');
const path = require('path');

router.get('/poeti', (req,res) => {
    res.sendFile(path.join(__dirname, '../people.json'));
});

router.get('/poetaSingolo/:number', (req,res) => {
    let poeta = people.persone.find(p => p.number == req.params.number)
 if (poeta === 'undefined') {
   return next(createError(404, 'Persona non trovata'));    //NON VA IL FUNZIONAMENTO DELL'ERRORE
 }
 else
 {
   let data = JSON.stringify(poeta);
   res.send(data);
 }
});

router.get('/poetiImmagini', (req,res) => {  
    let img = {};
    for(let i = 0; i < people.lenght; i++){
        img.push(people.persone[i].image);             //1 MODO
    }
    let data = JSON.stringify(img);
    res.send(data);
});

router.get('/poetiImmagini', (req,res) => {   
    let images = {immagini:[]};
    for(let i = 0; i < people.lenght; i++){                     //2 MODO
        images.immagini.push(people.persone[i].image);
    }
    let data = JSON.stringify(images);
    res.send(data);
});

module.exports = router;
