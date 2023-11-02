import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { userGuard } from './core/guards/user.guard';
import { publicGuard } from './core/guards/public.guard';

const routes: Routes = [
  {
    path: "",
    canActivateChild: [publicGuard],
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: "dashboard",
    canActivateChild: [userGuard, adminGuard],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: "admin",
    canActivateChild: [adminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
