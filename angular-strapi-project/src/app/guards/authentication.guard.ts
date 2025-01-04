import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticatedService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticatedService: AuthenticatedService, private router: Router) {}

  canActivate(): boolean {
    if (this.authenticatedService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
