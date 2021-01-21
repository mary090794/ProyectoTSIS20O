// Metodos que se llaman a traves de la ruta

'use strict'

var Usuario = require('../Modelos/Usuario');
//var fs = require('fs');
var path = require('path');

var controller = {

	getUsuarios: function(req, res){
		console.log("Entre al metodo");
		
		Usuario.find({}).exec((err, usuarios) => {
			
			console.log(usuarios);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!usuarios)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({usuarios});
		});

	}

}; // Fin de variable

module.exports = controller;