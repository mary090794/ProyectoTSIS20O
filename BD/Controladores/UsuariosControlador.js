// Metodos que se llaman a traves de la ruta

'use strict'

var Usuario = require('../Modelos/Usuario');
//var nodemailer = require('../node_modules/nodemailer');

var path = require('path');
const { Console } = require('console');

var controller = {

	getUsuarios: function(req, res){		
		
		Usuario.find({}).exec((err, usuarios) => {
			
			console.log(usuarios);

			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!usuarios)
				return res.status(404).send({message: 'No hay projectos que mostrar.'});
            
			return res.status(200).send({usuarios});
		});

	},

	validaUsuario: function(req, res){
	
		console.log("Entre al metodo valida usuario");
		
		var usuario = new Usuario();
		
		var params = req.body; 

		console.log("Entro a valida usuario del controlador")
		console.log(params.usuario);
		console.log(params.contrasena);

		Usuario.findOne().where({usuario: params.usuario,  pass: params.contrasena}).exec((err, usuarios) => {			
		
			if(err)
				return res.status(500).send({message: 'No hay usuarios.'});			
			
			return res.status(200).send({usuarios});		
			
		});

	},

	validaUsuarioR: function(req, res){	
		
		var usuario = new Usuario();
		
		var params = req.body; 

		console.log(params.usuario);		
		console.log(params.email);

		Usuario.findOne().where({usuario: params.usuario}).exec((err, usuarios) => {	
		
			if(err)
				return res.status(500).send({message: 'Error al devolver los datos.'});
			
			return res.status(200).send({usuarios});
			
		});

	},
	

	guardaUsuario: function(req, res){
	

		var newusuario = new Usuario();
		var params = req.body;

		console.log(params.usuario);
		console.log(params.contrasena);
		console.log(params.email);


		newusuario.usuario = params.usuario;
		newusuario.pass = params.contrasena;
		newusuario.email = params.email;

		newusuario.save((err,projectStored ) => {

		if(err) return res.status(500).send({message: 'Error al guardar al usuario.'});

		if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar al usuario.'});

		return res.status(200).send({project: projectStored});
		});
		

		/*var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'bellatrixacordes@gmail.com',
				pass: 'Bellatrixuam20o'
			}
			});*/
		
		var mailOptions = {
		from: 'bellatrixacordes@gmail.com',
		to: 'bellatrixacordes@gmail.com',
		subject: 'Bienvenido a Bellatrix tu Usuario ' + newusuario.usuario,
		text: 'A tocar!'
		};


		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		}); 
		
		
	}

}; // Fin de variable

module.exports = controller;