import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancion } from '../Interfaces/Cancion';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	//servidor = 'http://localhost:5000/'; // Local
	servidor = 'http://palancar.izt.uam.mx:4002/'; // Internet
	//http://palancar.izt.uam.mx:4002/
	constructor(public http: HttpClient) { }

	// Obtiene las cancionres ordenadas respecto a un tipo
	obtenerCanciones(tipo) {
		return this.http.get(this.servidor + 'Canciones' + tipo);
		//return this.http.get('http://palancar.izt.uam.mx:4002/Canciones' + tipo);
	}

	// Guarda una nueva cancion
	guardarCancion(cancion){
		return this.http.post<Cancion>(this.servidor + 'cancion', cancion);
	}

	// Obtiene la cancion con el id indicado
	obtenerCancion(id){
		//const path = this.pathGeneral + '/Cuestionario/' + id;
    	return this.http.get<Cancion>(this.servidor + 'cancion/' + id);
	}

	editarCancion(id, cancion){
	    return this.http.put<Cancion>(this.servidor + 'cancion/' + id, cancion);
	}

	eliminarCancion(id){
		return this.http.delete<Cancion>(this.servidor + 'cancion/' + id);
	}
}
