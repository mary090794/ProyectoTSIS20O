import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs'; //
import { Cancion } from '../Interfaces/Cancion';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  private listSource = new BehaviorSubject<any[]>([]);

  $getListSource = this.listSource.asObservable();

  constructor() { }

  sendListSource(list: Cancion[]){
    this.listSource.next(list);
  }
}
