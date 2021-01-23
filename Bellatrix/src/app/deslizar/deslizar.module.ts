import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeslizarPageRoutingModule } from './deslizar-routing.module';

import { DeslizarPage } from './deslizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeslizarPageRoutingModule
  ],
  declarations: [DeslizarPage]
})
export class DeslizarPageModule {}
