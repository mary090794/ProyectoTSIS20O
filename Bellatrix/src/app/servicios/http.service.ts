import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(public http: HttpClient) { }

	obtenerCanciones(tipo) {
		return this.http.get('http://localhost:5000/Canciones' + tipo);
	}
}
