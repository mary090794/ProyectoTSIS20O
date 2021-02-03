import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrausuarioPage } from './registrausuario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrausuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrausuarioPageRoutingModule {}
