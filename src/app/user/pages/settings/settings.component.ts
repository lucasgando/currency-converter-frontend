import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  auth: AuthService = inject(AuthService);
  isAdmin: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this.auth.isAdmin().then(res => {
      this.isAdmin.set(res);
    });
  }

  logOut() {
    this.auth.logOut();
  }
}
