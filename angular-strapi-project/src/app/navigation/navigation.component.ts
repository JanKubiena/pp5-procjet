import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [FormsModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isLoggedIn = false;
  avatarInitial = '';
  username = '';
  authStatus!: Subscription;

  constructor(public auth: AuthService, private router: Router ) {}

  logout() {
    this.auth.logout();
  }
}
