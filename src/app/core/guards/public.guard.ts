import { CanActivateChildFn } from '@angular/router';

export const publicGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
