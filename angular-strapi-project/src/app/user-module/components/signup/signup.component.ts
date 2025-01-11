import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class RegistrationComponent { 
  formData: { username?: string; email?: string; password?: string } = {};
  message: string | null = null;

  constructor(private http: HttpClient) {}

  register(event: Event): void {
    event.preventDefault();
    this.message = null;

    this.http
      .post('http://127.0.0.1:8082/api/auth/local/register', this.formData)
      .subscribe({
        next: (res: any) => {
          if (res.error) {
            this.message = res.error.message;
          } else if (res.jwt && res.user) {
            this.message = 'Rejestracja zakończona sukcesem. Możesz się teraz zalogować.';
          }
        },
        error: () => {
          this.message = 'Wystąpił błąd podczas rejestracji. Spróbuj ponownie.';
        },
      });
  }
}
