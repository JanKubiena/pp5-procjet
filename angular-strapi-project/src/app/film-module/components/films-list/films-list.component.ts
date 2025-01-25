import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/authentication.service';
import { FilmsService } from '../../../services/films.service';
import { Film } from '../../../models/film';



@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class FilmsListComponent implements OnInit {
  isLoggedIn = false;
  authStatus!: Subscription;

  constructor(public auth: AuthService, private fs: FilmsService) {}

  userFilms: Film[] = [];

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.userFilms = this.fs.getUserFilmsList()
        console.log(this.userFilms)
      }
    });
  }
}
