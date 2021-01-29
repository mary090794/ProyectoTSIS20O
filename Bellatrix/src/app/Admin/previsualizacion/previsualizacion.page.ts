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
    
    this.receiber.$getListSource.subscribe(lista => { 
      this.cancion = lista[0];
      this.letra = this.cancion["contenido"];
    }).unsubscribe();

  }

  ngOnInit() {
  }

  guardaDatos(){
    console.log("ANTES:" + this.cancion["_id"]);
    if(this.cancion["_id"] == undefined){
      console.log("Crea");
      console.log("DESPUES:" + this.cancion["_id"]);
      this.http.guardarCancion(this.cancion).subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) =>{
          console.error(error);
        }
      );
    }else{
      console.log("Edita");
      console.log("DESPUES:" + this.cancion["_id"]);

      this.http.editarCancion(this.cancion["_id"], this.cancion).subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) =>{
          console.error(error);
        }
      );
    }

    this.navCtrl.navigateForward("principal");
    
  }
}
