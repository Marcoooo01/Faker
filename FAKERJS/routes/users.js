const fs = require('fs');
var express = require('express');
var router = express.Router();
var faker = require('faker');

router.get('/', function(req, res, next) {
 res.send(createFakePerson());
});

function createFakePerson()
{
 let randomName = faker.name.findName(); 
 let randomEmail = faker.internet.email();
 let randomPhone = faker.phone.phoneNumber();
 let randomImage = faker.image.image(); 

 let person = {
   name:randomName,
   email:randomEmail,
   phone:randomPhone,
   image:randomImage,
 }

 let data = JSON.stringify(person);
 fs.writeFileSync('student-2.json', data);
 return person;
}


module.exports = router;