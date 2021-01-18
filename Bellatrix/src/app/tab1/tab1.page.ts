import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista = [];

	constructor() {
    	this.lista  = [
			{
				"nombre": "Ven aqui",
				"artista": "Los Bunkers"
			},
			{
				"nombre": "Cita en el quirofano",
				"artista": "Pxndx"	
			},
			{
				"nombre": "With or without you",
				"artista": "U2"	
			}
		];

		console.log(this.lista);
  	}

  	// Barra de busqueda
  	buscar($event){
  		// Si no hay texto, muestra todo el playlist
  		if($event.target.value == ""){
  			this.lista  = [
				{
					"nombre": "Ven aqui",
					"artista": "Los Bunkers"
				},
				{
					"nombre": "Cita en el quirofano",
					"artista": "Pxndx"	
				},
				{
					"nombre": "With or without you",
					"artista": "U2"	
				}
			];
  		}else{ // Se muestran las coicidencias del texto
  			// LAS COINCIDENCIAS LAS OBENETEMOS DE LA CONSULTA DEL MONGO
	  		this.lista = [
		  		{
		  			"nombre": "buscando",
		  			"artista": "buscando"
		  		}
	  		]
  		}
  	}

  	// Recibe el evento de seleccionar el ordenamiento
  	ordenarPor($event){
  		// LA ORDENACION SE REALIZA CON UNA CONSULTA DE MONGO
  		switch ($event.target.value) {
  			case "artista":
  				this.porArtista();
  				break;
  			case "genero":
  				this.porGenero();
  				break;
  			case "nombre":
  				this.porNombre();
  				break;
  		}
  	}
  	porArtista(){
  		console.log("Ordenando por artista");
  	}

  	porGenero(){
  		console.log("Ordenando por genero");
  	}

  	porNombre(){
  		console.log("Ordenando por nombre");
  		//Prueba de actualizacion de la lista
  		let nuevaLista = [this.lista[1], this.lista[0], this.lista[2]];
  		this.lista = nuevaLista;
  	}

}
