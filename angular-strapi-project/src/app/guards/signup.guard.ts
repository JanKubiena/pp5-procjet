import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class SignUpGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.checkIfLoggedIn()) {
        this.router.navigate(['/'])
        return false;
    } else {;
        return true;
    }
  }
}