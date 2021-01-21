// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

var express = require('express');

var CancionesControlador =require('../Controladores/CancionesControlador');
var UsuariosControlador =require('../Controladores/UsuariosControlador');

var router = express.Router();

router.get('/',CancionesControlador.home);
//router.post('/Descarga', CancionesControlador.saveDescarga);
router.get('/CancionesArtista',CancionesControlador.getCancionesPorArtista);
router.get('/CancionesGenero',CancionesControlador.getCancionesPorGenero);
router.get('/CancionesNombre',CancionesControlador.getCancionesPorNombre);

router.get('/Usuarios',UsuariosControlador.getUsuarios);

// Servicios para las graficas

module.exports = router;