import { Component } from '@angular/core';
import { AuthenticatedService } from '../../../services/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class LoginComponent {
  formData: { identifier?: string; password?: string } = {};
  message: string | null = null;

  constructor(private authenticatedService: AuthenticatedService, private router: Router) {}

  login(event: Event): void {
    event.preventDefault();
    this.message = null;

    if (this.formData.identifier && this.formData.password) {
      this.authenticatedService.login({
        identifier: this.formData.identifier,
        password: this.formData.password
      }).subscribe({
        next: (res: any) => {
          if (res.error) {
            this.message = res.error.message;
          } else {
            this.message = 'Logowanie zakończone sukcesem.';
            setTimeout(() => {
              this.router.navigate(['/user/account']);
          }, 2000);
          }
        },
        error: () => {
          this.message = 'Nieprawidłowe dane logowania. Spróbuj ponownie.';
        }
      });
    } else {
      this.message = 'Proszę wprowadzić identyfikator i hasło.';
    }
  }
}
