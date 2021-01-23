import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevisualizacionPageRoutingModule } from './previsualizacion-routing.module';

import { PrevisualizacionPage } from './previsualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevisualizacionPageRoutingModule
  ],
  declarations: [PrevisualizacionPage]
})
export class PrevisualizacionPageModule {}
