var pathM = require('path'); 

module.exports.indexPage = function(req,res)
{
    var sayilar = [
        "sayi1",
        "sayi2",
        "sayi3",
        "sayi4"
    ];
    res.render('bilgisayar',{numbers :sayilar}) ; 
}

module.exports.loginPage =  function(req,res)
{
    res.sendFile(pathM.join(__dirname, "../../login.html"));
} 

