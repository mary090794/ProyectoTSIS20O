import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrausuarioPageRoutingModule } from './registrausuario-routing.module';

import { RegistrausuarioPage } from './registrausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrausuarioPageRoutingModule
  ],
  declarations: [RegistrausuarioPage]
})
export class RegistrausuarioPageModule {}
