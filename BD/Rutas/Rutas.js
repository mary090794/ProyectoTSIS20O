// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

var express = require('express');

var CancionesControlador =require('../Controladores/CancionesControlador');
var UsuariosControlador =require('../Controladores/UsuariosControlador');

var router = express.Router();

router.get('/',CancionesControlador.home);
// Canciones
router.get('/CancionesArtista/:elemento?',CancionesControlador.obtenerCancionesPorArtista); // obtiene todo ordenado
router.get('/CancionesGenero/:elemento?',CancionesControlador.obtenerCancionesPorGenero); // obtiene todo ordenado
router.get('/CancionesTodasNombre',CancionesControlador.obtenerTodasCancionesPorNombre); // obtiene todo ordenado
router.get('/CancionesNombre/:elemento?',CancionesControlador.obtenerCancionesPorNombre); // obtiene todo ordenado
router.post('/Cancion', CancionesControlador.guardarCancion); // guarda una cancion
router.get('/Cancion/:id?',CancionesControlador.obtenerCancion); // obtiene uno por id
router.put('/Cancion/:id', CancionesControlador.actualizarCancion);
router.delete('/Cancion/:id?',CancionesControlador.borrarCancion); // elimina una cancion por id

// Usuarios
router.get('/Usuarios',UsuariosControlador.getUsuarios);
router.post('/validausuario',UsuariosControlador.validaUsuario);
router.post('/validausuarioR',UsuariosControlador.validaUsuarioR);
router.post('/guardausuario',UsuariosControlador.guardaUsuario);

module.exports = router;