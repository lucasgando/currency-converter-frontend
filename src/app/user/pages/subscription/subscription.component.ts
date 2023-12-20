import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { Subscription } from '../../../core/interfaces/subscription';
import { SubscriptionService } from './../../../core/services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  service: SubscriptionService = inject(SubscriptionService);
  router: Router = inject(Router);

  subscriptions: WritableSignal<Subscription[]> = signal<Subscription[]>([]);
  selectedSubscriptionId: number = 0;

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
