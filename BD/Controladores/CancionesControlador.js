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


	/*saveCancion: function(req, res){

		var cancion = new Cancion();

		var params = req.body;
		cancion.fecha = params.fecha;

		cancion.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar la cancion.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar la cancion.'});

			return res.status(200).send({project: projectStored});
		});

	},*/

	getCancionesPorArtista: function(req, res){

		Cancion.find({}).sort({artista: 1}).exec((err, canciones) => {
			
			console.log(canciones);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!canciones)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({canciones});
		});

	},

	getCancionesPorGenero: function(req, res){

		Cancion.find({}).sort({genero: 1}).exec((err, canciones) => {
			
			console.log(canciones);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!canciones)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({canciones});
		});

	},

	getCancionesPorNombre: function(req, res){

		Cancion.find({}).sort({nombre: 1}).exec((err, canciones) => {
			
			console.log(canciones);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!canciones)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({canciones});
		});

	}

}; // Fin de variable

module.exports = controller;