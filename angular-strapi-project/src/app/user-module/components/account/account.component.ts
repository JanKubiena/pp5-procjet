import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/authentication.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class AccountComponent implements OnInit {
  isLoggedIn = false;
  authStatus!: Subscription;

  constructor(private user: UserService, private auth: AuthService, private router: Router) {}

  userAccount: User = {} as User;

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.user.getUser().subscribe(user => {
          this.userAccount = user;
        });
        console.log(this.userAccount)
      } else {
        this.router.navigate(['/user/login']);
      }
    });
  }

}
