import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticatedService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  imports: [FormsModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(public authenticatedService: AuthenticatedService) {}

  logout(): void {
    localStorage.removeItem('jwt');
  }
}
