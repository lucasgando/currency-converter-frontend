import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { Subscription } from '../../../core/interfaces/subscription';
import { SubscriptionService } from './../../../core/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  service: SubscriptionService = inject(SubscriptionService);

  subscriptions: WritableSignal<Subscription[]> = signal<Subscription[]>([]);
  selectedSubscriptionId: number = 0;

  selected: WritableSignal<number> = signal(0);

  ngOnInit(): void {
    this.service.getAll().then(res => {
      this.subscriptions.set(res);
    });
  }

  changeSubscription(): void {
    console.log(this.selectedSubscriptionId)
    this.service.subscribe(this.selectedSubscriptionId).then(res => {
      console.log(res);
    });
  }
}
