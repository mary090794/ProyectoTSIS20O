import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesCancionPageRoutingModule } from './ajustes-cancion-routing.module';

import { AjustesCancionPage } from './ajustes-cancion.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';
//import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    AjustesCancionPageRoutingModule
  ],
  declarations: [AjustesCancionPage]
})
export class AjustesCancionPageModule {}
