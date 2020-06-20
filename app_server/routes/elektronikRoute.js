var expressM = require('express');
var routerM = expressM.Router(); //expressten 1 router sınıfı oluşturuyoruz
var callController = require('../controller/ElectronicController'); 

// routerM.use(function(req,res,next){

// next();
// })
  
routerM.get('/elektronik', callController.indexPage);

routerM.get('/bilgisayar', callController.loginPage);

module.exports = routerM; 