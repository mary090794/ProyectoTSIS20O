// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

var express = require('express');
var CancionesControlador =require('../Controladores/CancionesControlador');

var router = express.Router();

router.get('/',CancionesControlador.home);
//router.post('/Descarga', CancionesControlador.saveDescarga);
router.get('/CancionesArtista',CancionesControlador.getCancionesPorArtista);
router.get('/CancionesGenero',CancionesControlador.getCancionesPorGenero);
router.get('/CancionesNombre',CancionesControlador.getCancionesPorNombre);

// Servicios para las graficas

module.exports = router;