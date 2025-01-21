import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/authentication.service';
import { FilmsService } from '../../../services/films.service';
import { Film } from '../../../models/film';
import { User } from '../../../models/user';


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
  filmsUrl = 'http://localhost:8082/api/films?populate=*';
  user:User = {id: '', username: '', email: ''};
  userFilms: Film[] = [];

  constructor(public auth: AuthService, private fs: FilmsService) {}

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
      console.log(status)
      if (status) {
        this.fs.getUserFilmsList()
        .subscribe(res => {
          this.user = this.auth.getPersistedUser();
          for (let i = 0; i < res.data.length; i++) {
            if (this.user.email === res.data[i].user.email && this.user.username === res.data[i].user.username) {
              this.userFilms.push(res.data[i]);
            }
          }
          console.log(this.userFilms);
        });
      }
    });
  }
}
