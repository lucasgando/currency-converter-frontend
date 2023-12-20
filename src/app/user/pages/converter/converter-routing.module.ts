import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter.component';

const routes: Routes = [
  {
    path: '',
    component: ConverterComponent,
  },
  {
    path: 'from/:fromCurrencyId',
    component: ConverterComponent
  },
  {
    path: 'to/:toCurrencyId',
    component: ConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule { }
