import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	servidor = 'http://localhost:5000/'; // Local
	//servidor = 'http://localhost:5000/'; // Internet
	constructor(public http: HttpClient) { }

	// Obtiene las cancionres ordenadas respecto a un tipo
	obtenerCanciones(tipo) {
		return this.http.get(this.servidor + 'Canciones' + tipo);
		//return this.http.get('http://palancar.izt.uam.mx:4002/Canciones' + tipo);
	}

	// Guarda una nueva cancion
	guardarCancion(cancion){
		console.log("1.")
		console.log(cancion)
		return this.http.post<any>(this.servidor + 'cancion', cancion);
	}

	// Obtiene la cancion con el id indicado
	obtenerCancion(id){
		//const path = this.pathGeneral + '/Cuestionario/' + id;
    	return this.http.get<any>(this.servidor + 'cancion/' + id);
	}

	eliminarCancion(id){
		return this.http.delete<any>(this.servidor + 'cancion/' + id);
	}
}
