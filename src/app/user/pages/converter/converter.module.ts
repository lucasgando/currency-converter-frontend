import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';
import { FormsModule } from '@angular/forms';
import { CurrencyCardComponent } from "../../../core/components/currency-card/currency-card.component";


@NgModule({
    declarations: [
        ConverterComponent
    ],
    imports: [
        CommonModule,
        ConverterRoutingModule,
        FormsModule,
        CurrencyCardComponent
    ]
})
export class ConverterModule { }