import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './core/guards/user.guard';
import { publicGuard } from './core/guards/public.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivateChild: [userGuard],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    canActivateChild: [publicGuard],
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./core/pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
