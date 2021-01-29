'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    artista: String,
    nombre: String,
    genero: String,
    tempo: Number,
    contenido: []
});

module.exports = mongoose.model('canciones', ProjectSchema);
// --> guarda los documents en la coleccion. pluraliza y pone en minusculas