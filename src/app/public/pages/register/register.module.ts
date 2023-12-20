import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionCardComponent } from "../../../core/components/subscription-card/subscription-card.component";


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        SubscriptionCardComponent
    ]
})
export class RegisterModule { }
