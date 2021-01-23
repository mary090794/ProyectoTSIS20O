import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCancionPageRoutingModule } from './agregar-cancion-routing.module';

import { AgregarCancionPage } from './agregar-cancion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCancionPageRoutingModule
  ],
  declarations: [AgregarCancionPage]
})
export class AgregarCancionPageModule {}
