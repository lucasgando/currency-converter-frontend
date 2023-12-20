import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { CurrencyCardComponent } from './../../../core/components/currency-card/currency-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        CurrencyCardComponent,
        FormsModule
    ]
})
export class IndexModule { }
