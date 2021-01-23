import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCancionPageRoutingModule } from './editar-cancion-routing.module';

import { EditarCancionPage } from './editar-cancion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCancionPageRoutingModule
  ],
  declarations: [EditarCancionPage]
})
export class EditarCancionPageModule {}
