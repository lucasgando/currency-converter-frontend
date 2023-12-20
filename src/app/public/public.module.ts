import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";


@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class PublicModule { }
