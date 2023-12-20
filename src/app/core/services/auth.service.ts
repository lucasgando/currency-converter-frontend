import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, RegisterData } from '../interfaces/user';
import { API } from './../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: Router = inject(Router);
  token: string | null;
  constructor() {
    this.token = localStorage.getItem('token');
  }

  async login(loginData: LoginData): Promise<boolean> {
    const res: Response = await fetch(API + "auth", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });
    if (!res.ok) return false;
    const givenToken: string = await res.text();
    localStorage.setItem('token', givenToken);
    this.token= givenToken;
    return true;
  }

  async register(registerData: RegisterData): Promise<boolean> {
    const res = await fetch(API + 'user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    return res.status == 201;
  }
  
  logOut(): void {
    localStorage.removeItem('token');
    this.token = null;
    this.router.navigate(['/login']);
  }
  
  isLoggedIn(): boolean {
    console.log('token: ', this.token, 'is null? : ', this.token == null);
    return this.token == null;
  }

  async isAdmin() {
    const res = await fetch(API + 'user/is-admin', {
      method: 'GET',
      headers: {
        Authorization: "Bearer " + this.token
      }
    });
    const resJson = await res.json();
    return Boolean(resJson).valueOf();
  }
}
