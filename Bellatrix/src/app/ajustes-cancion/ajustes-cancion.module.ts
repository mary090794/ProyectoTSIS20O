import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesCancionPageRoutingModule } from './ajustes-cancion-routing.module';

import { AjustesCancionPage } from './ajustes-cancion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesCancionPageRoutingModule
  ],
  declarations: [AjustesCancionPage]
})
export class AjustesCancionPageModule {}
