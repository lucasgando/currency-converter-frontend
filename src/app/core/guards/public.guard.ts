import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const publicGuard: CanActivateChildFn = (childRoute, state) => {
  const auth: AuthService = inject(AuthService);
  if (auth.token != null) {
    const router = inject(Router);
    router.navigate(['dashboard/converter']);
    return false;
  }
  return true;
};
