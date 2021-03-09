// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'
 
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');

var app = require('./app');

var port = 5000; //puede cambiar


// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
 
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/miDB', {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {

        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log('La conexión a MongoDB se ha realizado correctamente!!');

        // Creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en localhost:5000");
        }); 
    }).catch(err => console.log(err));
    // Si no se conecta correctamente escupimos el error
