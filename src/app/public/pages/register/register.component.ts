import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { RegisterData } from '../../../core/interfaces/user';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from '../../../core/interfaces/subscription';
import { SubscriptionService } from '../../../core/services/subscription.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  auth: AuthService = inject(AuthService);
  service: SubscriptionService = inject(SubscriptionService);
  router: Router = inject(Router);
  passwordRegex: RegExp = RegExp('^\\S*(?=\\S{6,})(?=\\S*\\d)(?=\\S*[A-Z])(?=\\S*[a-z])(?=\\S*[!@#$%^&*? ])\\S*$');

  registerData: RegisterData = {
    username: '',
    email: '',
    password: '',
    subscriptionId: 0
  };
  repeatPassword = "";

  loading: WritableSignal<boolean> = signal(false);
  registerError: WritableSignal<boolean> = signal(false);
  subscriptions: WritableSignal<Subscription[]> = signal<Subscription[]>([]);
  choosingSubscription: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this.service.getAll().then(res => {
      this.subscriptions.set(res);
    });
  }

  register():void {
    this.loading.set(true);
    this.registerError.set(false);
    this.auth.register(this.registerData).then(res => {
      if (res) {
        this.auth.login({
          email: this.registerData.email,
          password: this.registerData.password
        }).then(r => {
          if (r) {
            this.router.navigate(['/dashboard/converter']);
          } else {
            console.warn('Error logging in.');
            this.router.navigate(['/login']);
          }
        });
      } else {
        this.registerError.set(true)
        console.warn('Error registering.');
        this.choosingSubscription.set(false);
      };
    });
    this.loading.set(false);
  }
}
