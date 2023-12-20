import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { ConversionCardComponent } from "../../../core/components/conversion-card/conversion-card.component";


@NgModule({
    declarations: [
        HistoryComponent
    ],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        ConversionCardComponent
    ]
})
export class HistoryModule { }
