
var fs = require('fs');
var expressM = require('express');
var pathM = require('path');  // aşağıda haritalama yaparken gerekecek
var app = expressM();
// var newModul = require('./ElectronicController'); //kendi oluşturduğumuzu modül . Modülde export   
   // geçmezse kullanamayız

app.set('view engine' , 'ejs'); //görüntü motorumuzu tanıttık 
app.set('views' ,pathM.join(__dirname, '/app_server/views')); //motorumuzun bulunacağı klasörü belirttik

var routeElectronik = require('./app_server/routes/elektronikRoute');
                                           
// var runNewModul = newModul(); 
app.use('/public',expressM.static(pathM.join(__dirname, 'public')));
// bu yazılmazsa, HTML'de <link url> yaparken, public klasörüne yerleştirdiğin dosyalara erişemez, 
// yani stil veremezsin bir css veya js dosyası çağırsan bile. 

app.use('/',routeElectronik);


app.listen(1000);
console.log("başarılı bir şekilde çalışıyor");