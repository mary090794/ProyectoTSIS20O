import { Component, OnInit } from '@angular/core';
import { ReceiverService } from '../../servicios/receiver.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-cancion',
  templateUrl: './editar-cancion.page.html',
  styleUrls: ['./editar-cancion.page.scss'],
})
export class EditarCancionPage implements OnInit {

  constructor(private navCtrl: NavController, private receiber: ReceiverService) { }

  listaAcordes = [];
  tonos = [];
  listaVariaciones = [];

  cancion;

  letra = [];

  indiceActual = -1;
  acordeActual = "";
  tonoActual = "";
  variacioActual = "";
  fraseActual = "";

  ngOnInit() {

    this.receiber.$getListSource.subscribe(list => { this.cancion = list; }).unsubscribe();

    console.log("Recibi:");

    console.log(this.cancion);

    this.letra = this.cancion.contenido;
    

  	this.listaAcordes = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
  	this.tonos = ["", "#", "b"];
  	this.listaVariaciones = ["","m", "7", "sus4"];

  }


  agregarFrase(acorde, tono, variacion, frase){
    if(this.indiceActual != -1){
      console.log("Este se actualiza");
      for (var i = 0; i < this.letra.length; i++) {
        if(this.letra[i].indice == this.indiceActual){
          break;
        }
      }

      this.letra[i] = {"indice": this.indiceActual, "acorde": acorde, "tono": tono, "variacion": variacion, "letra": frase};
    }else{
      if(acorde == undefined) acorde ="";
      if(tono == undefined) tono ="";
      if(variacion == undefined) variacion ="";
      if(frase == undefined) frase ="";

      let ultimo = this.letra[this.letra.length-1].indice;
      console.log(ultimo);
      this.letra.push({"indice": (ultimo+1), "acorde": acorde, "tono": tono, "variacion": variacion, "letra": frase});

      console.log(this.letra);
    }

  	this.limpiaCampos();

    this.indiceActual = -1;
  }

  cargaDatos(datos){
    console.log(datos);
    this.indiceActual = datos.indice;
    this.acordeActual = datos.acorde;
    this.fraseActual = datos.letra;
    this.tonoActual = datos.tono;
    this.variacioActual = datos.variacion;
  }

  borrar(indice){
  	console.log("Borrar " + (indice-1));
    this.letra.splice(indice-1, 1);
  }

  limpiaCampos(){
    this.acordeActual = "";
    this.fraseActual = "";
    this.tonoActual = "";
  }

  enviarDatosPrevisualizacion(){
    console.log(this.letra);
    this.receiber.sendListSource(this.letra);

    this.navCtrl.navigateForward("previsualizacion");
  }

}
