import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from './../interfaces/subscription';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService extends ApiService {
  constructor() { super(); }

  async getAll(): Promise<Subscription[]> {
    const res = await this.getAuth('subscription');
    const resJson: Subscription[] = await res.json();
    return resJson;
  }

  async subscribe(id: number): Promise<boolean> {
    const res = await fetch(API + 'subscription/change-subscription?subscriptionId=' + id, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.auth.token
      }
    })
    return res.ok;
  }
}
