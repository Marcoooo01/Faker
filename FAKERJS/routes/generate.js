var express = require('express');
var router = express.Router();
const fs = require('fs');
var faker = require('faker');

router.get('/', function(req, res, next) {
    res.send(createFakePerson())
});

function createFakePerson()
{
    let ogg = {persone:[]};


for(let i = 0; i<10; i++)
{
 let randomName = faker.name.findName(); 
 let randomEmail = faker.internet.email();
 let randomPhone = faker.phone.phoneNumber();
 let randomImage = faker.image.people(); 

 let person = {
   name:randomName,
   email:randomEmail,
   phone:randomPhone,
   image:randomImage,
 }

 ogg.persone.push(person);
}
 let data = JSON.stringify(ogg);
 fs.writeFileSync('people.json', data);
 return data;
}

module.exports = router;