import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from "../core/components/header/header.component";
import { NavbarComponent } from "../core/components/navbar/navbar.component";


@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        HeaderComponent,
        NavbarComponent
    ]
})
export class UserModule { }
