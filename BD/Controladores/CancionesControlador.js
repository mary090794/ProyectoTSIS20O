// Metodos que se llaman a traves de la ruta

'use strict'

var Cancion = require('../Modelos/Cancion');
//var fs = require('fs');
var path = require('path');

var controller = {
	
	home: function(req, res){
		return res.status(200).send({
			message: 'Ruta de inicio del controlador de canciones xD'
		});
	},

	obtenerCancionesPorArtista: function(req, res){

		Cancion.find({}).sort({artista: 1}).exec((err, canciones) => {
			
			console.log(canciones);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!canciones)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({canciones});
		});

	},

	obtenerCancionesPorGenero: function(req, res){

		Cancion.find({}).sort({genero: 1}).exec((err, canciones) => {
			
			console.log(canciones);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!canciones)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({canciones});
		});

	},

	obtenerCancionesPorNombre: function(req, res){

		Cancion.find({}).sort({nombre: 1}).exec((err, canciones) => {
			
			console.log(canciones);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!canciones)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({canciones});
		});

	},

	guardarCancion: function(req, res){

		var cancion = new Cancion();

		var params = req.body;


		console.log(cancion.nombre);
		console.log(cancion.artista);
		console.log(cancion.genero);
		console.log(cancion.tempo);
		console.log(cancion.contenido);

		cancion.nombre = params.nombre;
		cancion.artista = params.artista;
		cancion.genero = params.genero;
		cancion.tempo = params.tempo;
		cancion.contenido = params.contenido;

		cancion.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el cuestionario.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el cuestionario.'});

			return res.status(200).send({project: projectStored});
		});

	},

	obtenerCancion: function(req, res){
		var idCancion = req.params.id;

		if(idCancion == null)
			return res.status(404).send({message: 'La canción no existe.'});

		Cancion.findById(idCancion, (err, project) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!project) return res.status(404).send({message: 'La canción no existe.'});

			return res.status(200).send({project});

		});
	},

	borrarCancion: function(req, res){
		var idCancion = req.params.id;

		Cancion.findByIdAndRemove(idCancion, (err, queryResult) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar la canción'});

			if(!queryResult) return res.status(404).send({message: "No se puede eliminar esta canción."});

			return res.status(200).send({
				Cancion: queryResult
			});
		});
	},




}; // Fin de variable

module.exports = controller;