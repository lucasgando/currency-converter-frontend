import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions.component';
import { SubscriptionCardComponent } from './../../../core/components/subscription-card/subscription-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubscriptionsComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    SubscriptionCardComponent,
    FormsModule
  ]
})
export class SubscriptionsModule { }
