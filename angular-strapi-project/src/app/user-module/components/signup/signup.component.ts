import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class SignupComponent implements OnDestroy { 
  formUserData: { username?: string; email?: string; password?: string } = {};
  private registrationSub: Subscription | undefined;
  message: string | null = null;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnDestroy(): void {
    if (this.registrationSub) {
      this.registrationSub.unsubscribe();
    }
  }

  signup(): void {
    this.message = null;

      this.registrationSub = this.auth.register(
        this.formUserData.username,
        this.formUserData.email,
        this.formUserData.password
      ).subscribe({
        next: (res: any) => {
          if (res.error) {
            this.message = res.error.message;
          } else {
            this.message = 'Rejestracja zakończona sukcesem.';
            this.auth.persistUser(res);
            setTimeout(() => {
              this.router.navigate(['/user/login']);
          }, 2000);
          }
        },
        error: () => {
          this.message = 'Nieprawidłowe dane rejestracji. Spróbuj ponownie.';
        }
      });
    } 
  }
