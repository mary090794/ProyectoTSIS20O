'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    usuario: String,
    pass: String,
    correo: String
});

module.exports = mongoose.model('usuarios', ProjectSchema);
// --> guarda los documents en la coleccion. pluraliza y pone en minusculas