import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BodycComponent } from './bodyc/bodyc.component';

import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./app.component').then( m => m.AppComponent)
  },
  {
    path: 'bodyc',
    loadChildren: () => import('./bodyc/bodyc.component').then( m => m.BodycComponent)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
