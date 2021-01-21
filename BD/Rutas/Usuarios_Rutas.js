// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

var express = require('express');
var UsuariosControlador =require('../Controladores/UsuariosControlador');

var router = express.Router();

router.get('/Usuarios',UsuariosControlador.home);

module.exports = router;