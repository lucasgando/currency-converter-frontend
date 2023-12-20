import { Component, WritableSignal, inject, signal } from '@angular/core';
import { SubscriptionService } from './../../../core/services/subscription.service';
import { Subscription } from './../../../core/interfaces/subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
  service: SubscriptionService = inject(SubscriptionService);
  router: Router = inject(Router);

  subscriptions: WritableSignal<Subscription[]> = signal<Subscription[]>([]);
  selectedSubscriptionId: number = 0;

  freeSubscription: Subscription = {
    id: 1,
    name: 'Free Subscription',
    converterLimit: 10,
    usdPrice: 0,
    subscriptionPicture: 'http://2.bp.blogspot.com/-Kjm_y-4VY6Q/T-CZuH4eDMI/AAAAAAAABUg/H5mIxef6Tjc/s1600/Free1.jpg'
  }

  selected: WritableSignal<number> = signal(0);

  ngOnInit(): void {
    this.service.getAll().then(res => {
      this.subscriptions.set(res);
    });
  }

  changeSubscription(): void {
    this.service.subscribe(this.selectedSubscriptionId).then(res => {
      this.router.navigate(['/dashboard/converter']);
    });
  }
}
