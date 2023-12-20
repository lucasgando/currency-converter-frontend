import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionCardComponent } from '../../../core/components/subscription-card/subscription-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    SubscriptionCardComponent,
    FormsModule
  ]
})
export class SubscriptionModule { }
