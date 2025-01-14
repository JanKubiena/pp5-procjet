import { Component } from '@angular/core';
import { AuthService } from '../../../services/authentication.service';
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

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {}
}
