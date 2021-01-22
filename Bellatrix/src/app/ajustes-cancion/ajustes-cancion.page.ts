import { Component } from '@angular/core';
import { HttpService } from '../servicios/http.service';

@Component({
  selector: 'app-ajustes-cancion',
  templateUrl: './ajustes-cancion.page.html',
  styleUrls: ['./ajustes-cancion.page.scss'],
})
export class AjustesCancionPage {

  lista = [];
  favoritos = []
  tipoActual = "";
  cancion = [];

	constructor(public http: HttpService) {
    this.tipoActual = "Nombre";
    this.cargarCanciones(this.tipoActual);    
  }

    // Obtiene de la BD la lista ordenada por el tipo
    cargarCanciones(tipo){
      this.http.obtenerCanciones(tipo).subscribe(
        (res: any) => {
          this.lista = res.canciones;
          this.cancion = res.canciones[0];
        },
        (error) =>{
          console.error(error);
        }
      );
    }


}
