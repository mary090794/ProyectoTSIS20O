import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeslizarPage } from './deslizar.page';

const routes: Routes = [
  {
    path: '',
    component: DeslizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeslizarPageRoutingModule {}
