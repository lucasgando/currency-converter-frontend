import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { HeaderComponent } from "../../components/header/header.component";


@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
        CommonModule,
        ErrorRoutingModule,
        HeaderComponent
    ]
})
export class ErrorModule { }
