import { Component } from '@angular/core';
import { HttpService } from '../servicios/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista = [];
  favoritos = []
  tipoActual = "";

	constructor(public http: HttpService) {
    this.tipoActual = "Nombre";
    this.cargarCanciones(this.tipoActual);    
  }

    // Obtiene de la BD la lista ordenada por el tipo
    cargarCanciones(tipo){
      this.http.obtenerCanciones(tipo).subscribe(
        (res: any) => {
          this.lista = res.canciones;
          //console.log(res.canciones[0])
          this.favoritos.push(res.canciones[5]); // Cancion favorita de prueba
        },
        (error) =>{
          console.error(error);
        }
      );
    }

  	// Barra de busqueda
  	buscar($event){
  		// Si no hay texto, muestra todo el playlist
  		if($event.target.value == ""){
  			this.cargarCanciones(this.tipoActual);
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
      let tipo = $event.target.value;
      tipo = tipo[0].toUpperCase() + tipo.slice(1);
      this.tipoActual = tipo;
  		this.cargarCanciones(tipo);
  	}

    // Agrega la cancion seleccionada a favoritos
    agregarFavorito(cancion, slidingItem){
      
      console.log("Agregar a favoritos:" + cancion.nombre);
      slidingItem.close(); // Cierra el boton deslizable
    }

    // Para colocar icono de favorito
    esFavorito(cancion){
      // Condiciones
      let c1, c2, c3

      for(let i in this.favoritos){

        c1 = this.favoritos[i].nombre == cancion.nombre;
        c2 = this.favoritos[i].artista == cancion.artista;
        c3 = this.favoritos[i].genero == cancion.genero;

        if(c1 && c2 && c3){
          return true;
        }
      }

      return false;
    }

}
