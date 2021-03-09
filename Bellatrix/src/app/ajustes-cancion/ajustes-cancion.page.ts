import { Component } from '@angular/core';
import { HttpService } from '../servicios/http.service';
import { NavController } from '@ionic/angular';
import { ReceiverService } from '../servicios/receiver.service';
import { Cancion } from '../Interfaces/Cancion';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Toast } from '@capacitor/core';

@Component({
  selector: 'app-ajustes-cancion',
  templateUrl: './ajustes-cancion.page.html',
  styleUrls: ['./ajustes-cancion.page.scss'],
})
export class AjustesCancionPage {

  lista = [];
  favoritos = []
  tipoActual = "";
  cancion: Cancion;

  tempos = [];
  tempo = 100;
  shop;

  //qrData = 'http://palancar.izt.uam.mx/Bellatrix/';
  qrData = 'http://localhost:8100/Bellatrix/';
  //qrData = null;
  createdCode = null;
  scannedCode = null;

  message:string = null;
  file:string = null;
  link: string = null;
  subject:string = null;

	constructor(public http: HttpService, private navCtrl: NavController, private receiber: ReceiverService, private barcodeScanner: BarcodeScanner, private socialSharing: SocialSharing, private base64ToGallery: Base64ToGallery) {
    // Se recibe la cancion seleccionada
    this.receiber.$getListSource.subscribe(list => { this.cancion = list[0]; }).unsubscribe();
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
      //this.receiber.sendListSource([this.cancion]);
      this.navCtrl.navigateForward(["deslizar", this.cancion._id]);
    }

    createCode () {
      this.createdCode = this.qrData+this.cancion.nombre;
      console.log(this.createdCode);
      console.log(this.cancion._id);
      //console.log(this.cancion.contenido);
    }
  
    scanCode () {
      this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text;
      })
    }

    share(){
      this.socialSharing.share(this.message,this.subject,this.file,this.link)
      .then(()=>{

      }).catch(()=>{

      });
    }
   /* downloadRQ(){
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const imageData = canvas.toDataURL('image/jpeg').toString();
      console.log('data: ',imageData);
      
      let data= imageData.split(',')[1];
      this.base64ToGallery.base64ToGallery(data,
        { prefix: '_img', mediaScanner: true})
        .then(async res =>{
          let toast = await this.toastCtrl.create({
            header: 'QR salvado en tu galeria XD'
          });
          toast.present();
        }, err => console.log('err: ', err)
        );  
    }*/
}
