import { Component } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import { NavController } from '@ionic/angular';
import { ReceiverService } from '../servicios/receiver.service';

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

  tempos = [];
  tempo = 100;
  shop;
	constructor(public http: HttpService, private navCtrl: NavController, private receiber: ReceiverService) {
    // Se recibe la cancion seleccionada
    this.receiber.$getListSource.subscribe(list => { this.cancion = list; }).unsubscribe();
    for (var i = 50; i < 140; i++) {
      this.tempos.push(i);
    }
  }


  incrementaTempo() {
    console.log("Incr");
    this.tempo++;
  }

  decrementaTempo() {
    console.log("Decr");
    this.tempo--;
  }



    comenzar(){
      this.navCtrl.navigateForward("deslizar");
    }
}
