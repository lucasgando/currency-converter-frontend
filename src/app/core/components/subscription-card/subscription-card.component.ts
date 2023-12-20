import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from './../../interfaces/subscription';

@Component({
  selector: 'subscription-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss']
})
export class SubscriptionCardComponent {
  @Input({required: true}) subscription: Subscription = {
    id: 0,
    name: '',
    converterLimit: 0,
    usdPrice: 0,
    subscriptionPicture: ''
  }
}
