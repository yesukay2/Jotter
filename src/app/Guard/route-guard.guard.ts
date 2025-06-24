import { CanActivateFn } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const routeGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const authenticateUser = authService.getUserId();
  if (authenticateUser !== null && authenticateUser !== undefined) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
