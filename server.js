var express = require('express');
var app = express();
//var path = require('path');


app.use('/',express.static(__dirname));


app.listen(3001, function(){
    console.log('Nuestra webapp To-do ya escucha el puerto 3001');
});
