import { Component } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import { NavController } from '@ionic/angular';
import { ReceiverService } from '../servicios/receiver.service';
import { Console } from 'console';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista = [];
  favoritos = []
  tipoActual = "";
  elemento="";

	constructor(public http: HttpService, private navCtrl: NavController, private receiber: ReceiverService) { 
    this.tipoActual = "Nombre";
    this.elemento="";
    this.cargarTodasCanciones(this.tipoActual);    
  }

    // Obtiene de la BD la lista ordenada por el tipo
    cargarTodasCanciones(tipo){
      this.http.obtenerTodasCanciones(tipo).subscribe(
        (res: any) => {
          this.lista = res.canciones;         
          //this.favoritos.push(res.canciones[0]); // Cancion favorita de prueba       
        },
        (error) =>{
          console.error(error);
        }
      );
    }

  // Obtiene de la BD la lista ordenada por el tipo
  cargarCanciones(tipo,elemento){
    this.http.obtenerCanciones(tipo,elemento).subscribe(
      (res: any) => {
        this.lista = res.canciones;        
        //this.favoritos.push(res.canciones[0]); // Cancion favorita de prueba      
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  	// Barra de busqueda 
  	buscar($event){  	
      this.elemento=$event.target.value;
      console.log("evento");
      console.log($event.target.value);
  		if(this.elemento == "" || null){
        this.tipoActual="Nombre";
  			this.cargarTodasCanciones(this.tipoActual);
  		}else{ 
         
        this.cargarCanciones(this.tipoActual,this.elemento);
	  	
  		}
  	}

  	// Recibe el evento de seleccionar el ordenamiento y filtrado
  	ordenarPor($event){  		
      let tipo = $event.target.value;
      tipo = tipo[0].toUpperCase() + tipo.slice(1);
      this.tipoActual = tipo;
  		this.cargarCanciones(tipo,this.elemento);
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

    mostrarAjustes(cancion){
      this.receiber.sendListSource([cancion]);
      this.navCtrl.navigateForward("ajustes-cancion");
    }

}
