import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { userGuard } from './core/guards/user.guard';
import { publicGuard } from './core/guards/public.guard';

const routes: Routes = [
  {
    canActivateChild: [adminGuard],
    children: [
      
    ],
  },
  {
    canActivateChild: [userGuard],
    children: [
      
    ],
  },
  {
    canActivateChild: [publicGuard],
    children: [
      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
