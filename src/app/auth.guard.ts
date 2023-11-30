import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let data = localStorage.getItem('users');
  console.log('data', data);

  if (data.match('nipa')) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
