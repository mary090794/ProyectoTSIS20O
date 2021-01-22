import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesCancionPage } from './ajustes-cancion.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesCancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesCancionPageRoutingModule {}
