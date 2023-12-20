import { Component, WritableSignal, inject, signal } from '@angular/core';
import { LoginData } from '../../../core/interfaces/user';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  auth: AuthService = inject(AuthService);
  router: Router = inject(Router);
  loginData: LoginData = {
    email: '',
    password: ''
  };

  loginError: WritableSignal<boolean> = signal(false);
  loading: WritableSignal<boolean> = signal(false);

  login(): void {
    console.log(this.loginData)
    this.loading.set(true);
    try {
      this.auth.login(this.loginData).then(res => {
        if (res) {
          this.router.navigate(["/dashboard/converter"]);
        } else {
          this.loginError.set(true);
        }
      })
    } catch (error) {
      console.warn('Error logging in:', error);
    }
    this.loading.set(false);
    return;
  }
}
