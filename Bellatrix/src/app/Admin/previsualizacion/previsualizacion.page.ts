import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReceiverService } from '../../servicios/receiver.service';

@Component({
  selector: 'app-previsualizacion',
  templateUrl: './previsualizacion.page.html',
  styleUrls: ['./previsualizacion.page.scss'],
})

export class PrevisualizacionPage implements OnInit {
  cancion = [];

  constructor(private receiber: ReceiverService, private navCtrl: NavController) {    
    this.receiber.$getListSource.subscribe(list => { this.cancion = list; }).unsubscribe();
    console.log("Se recibió");
    console.log(this.cancion);
  }

  ngOnInit() {
  }

  guardaDatos(){
    this.navCtrl.navigateForward("principal");
  }
}
