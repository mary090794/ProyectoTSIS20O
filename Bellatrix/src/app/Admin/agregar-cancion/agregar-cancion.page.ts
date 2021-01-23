import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ReceiverService } from '../../servicios/receiver.service';

@Component({
  selector: 'app-agregar-cancion',
  templateUrl: './agregar-cancion.page.html',
  styleUrls: ['./agregar-cancion.page.scss'],
})
export class AgregarCancionPage implements OnInit {

  constructor(private navCtrl: NavController, private receiber: ReceiverService) { }

  listaAcordes = [];
  tonos = [];
  listaVariaciones = [];

  cancion = {};

  letra = [];

  indiceActual = -1;
  acordeActual = "";
  tonoActual = "";
  variacioActual = "";
  fraseActual = "";

  ngOnInit() {

    this.listaAcordes = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
    this.tonos = ["", "#", "b"];
    this.listaVariaciones = ["","m", "7", "sus4"];

    //this.cancion = [{"indice": 1, "acorde":"Do", "tono": "", "variacion": "",  "letra": "Imagine there's"}]
  }


  agregarFrase(acorde, tono, variacion, frase){

    if(this.indiceActual != -1){
      console.log("Esta frase se actualiza");

      for (var i = 0; i < this.letra.length; i++) {
        if(this.letra[i].indice == this.indiceActual){
          break;
        }
      }

      this.letra[i] = {"indice": this.indiceActual, "acorde": acorde, "tono": tono, "variacion": variacion, "letra": frase};

    }else{

      if(this.letra.length == 0){
        this.letra.push({"indice": 0, "acorde": acorde, "tono": tono, "variacion": variacion, "letra": frase});
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
    }
    for (var i = 0 ; i < 1000; i++) {
      i++;
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
    console.log("limpiaaa");

    this.acordeActual = "";
    this.fraseActual = "";
    this.tonoActual = "";
    this.variacioActual = "";
  }

  enviarDatosPrevisualizacion(){
    console.log(this.letra);
    this.receiber.sendListSource([this.letra]);
    this.navCtrl.navigateForward("previsualizacion");
  }
}
