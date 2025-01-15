import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class LoginComponent implements OnDestroy{
  formUserData: { identifier?: string; password?: string } = {};
  message: string | null = null;

  private loginSub: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

  login(): void {
    this.message = null;

    this.loginSub = this.authService.login(
      this.formUserData.identifier,
      this.formUserData.password
    ).subscribe({
      next: (res: any) => {
        if (res.error) {
          this.message = res.error.message;
        } else {
          this.message = 'Zalogowano pomyślnie.';
          this.authService.persistUser(res);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }
      },
      error: () => {
        this.message = 'Nieprawidłowe dane logowania. Spróbuj ponownie.';
      }
    });
  }
}
