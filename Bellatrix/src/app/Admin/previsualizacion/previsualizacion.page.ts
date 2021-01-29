import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReceiverService } from '../../servicios/receiver.service';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-previsualizacion',
  templateUrl: './previsualizacion.page.html',
  styleUrls: ['./previsualizacion.page.scss'],
})

export class PrevisualizacionPage implements OnInit {
  //cancion: {nombre: String, artista: String, genero: String, contenido: any[{any}]};

  cancion = {};

  letra = [];
  constructor(public http: HttpService, private receiber: ReceiverService, private navCtrl: NavController) {    
    this.receiber.$getListSource.subscribe(cancion => { 
      this.cancion = cancion[0];
      console.log(this.cancion);
      this.letra = this.cancion["contenido"];
      //console.log(this.letra);
    }).unsubscribe();
  }

  ngOnInit() {
  }

  guardaDatos(){
    /*let song = {
      "nombre": "Snow",
      "artista": "Red Hot Chilli Pepers",
      "genero": "Rock",
      "tempo": 120,
      "contenido":[
        {
          "indice":1,
          "acorde":"Do",
          "tono":"",
          "variacion":"",
          "letra":"Imagine there's"
        },
        {
          "indice":2,
          "acorde":"Do",
          "tono":"",
          "variacion":"Sus4",
          "letra":"no hea"
        },
        {
          "indice":3,
          "acorde":"Fa",
          "tono":"",
          "variacion":"",
          "letra":"ven"}
      ]
    };
    */
    this.http.guardarCancion(this.cancion).subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) =>{
          console.error(error);
        }
      );

    this.navCtrl.navigateForward("principal");
  }
}
