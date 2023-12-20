import { Component, WritableSignal, inject, signal } from '@angular/core';
import { RegisterData } from '../../../core/interfaces/user';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  auth: AuthService = inject(AuthService);
  router: Router = inject(Router);
  passwordRegex: RegExp = RegExp('^\\S*(?=\\S{6,})(?=\\S*\\d)(?=\\S*[A-Z])(?=\\S*[a-z])(?=\\S*[!@#$%^&*? ])\\S*$');

  registerData: RegisterData = {
    username: '',
    email: '',
    password: ''
  };
  repeatPassword = "";

  loading: WritableSignal<boolean> = signal(false);
  registerError: WritableSignal<boolean> = signal(false);

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
            this.router.navigate(['/subscriptions']);
          } else {
            console.warn('Error logging in.');
            this.router.navigate(['/login']);
          }
        });
      } else {
        this.registerError.set(true)
        console.warn('Error registering.');
      };
    });
    this.loading.set(false);
  }
}
