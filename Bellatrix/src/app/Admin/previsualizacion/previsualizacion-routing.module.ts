import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisualizacionPage } from './previsualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisualizacionPageRoutingModule {}
