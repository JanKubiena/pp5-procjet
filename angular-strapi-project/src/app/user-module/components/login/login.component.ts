import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private http: HttpClient) {}

  login(event: Event): void {
    event.preventDefault();
    this.message = null;

    this.http
      .post('http://127.0.0.1:8082/api/auth/local', this.formData)
      .subscribe({
        next: (res: any) => {
          if (res.error) {
            this.message = res.error.message;
          } else if (res.jwt && res.user) {
            this.message = 'Logowanie zakończone sukcesem.';
          }
        },
        error: (err) => {
          this.message = 'Nieprawidłowe dane logowania. Spróbuj ponownie.';
        }
      });
  }
}
