import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ajustes-cancion',
    loadChildren: () => import('./ajustes-cancion/ajustes-cancion.module').then( m => m.AjustesCancionPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./Admin/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agregar-cancion',
    loadChildren: () => import('./Admin/agregar-cancion/agregar-cancion.module').then( m => m.AgregarCancionPageModule)
  },
  {
    path: 'previsualizacion',
    loadChildren: () => import('./Admin/previsualizacion/previsualizacion.module').then( m => m.PrevisualizacionPageModule)
  },
  {
    path: 'editar-cancion',
    loadChildren: () => import('./Admin/editar-cancion/editar-cancion.module').then( m => m.EditarCancionPageModule)
  },
  {
    path: 'deslizar',
    loadChildren: () => import('./deslizar/deslizar.module').then( m => m.DeslizarPageModule)
  },  {
    path: 'registrausuario',
    loadChildren: () => import('./Admin/registrausuario/registrausuario.module').then( m => m.RegistrausuarioPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
