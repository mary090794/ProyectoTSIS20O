import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCancionPage } from './editar-cancion.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCancionPageRoutingModule {}
