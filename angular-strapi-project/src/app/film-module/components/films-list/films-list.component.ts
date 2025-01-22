import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/authentication.service';
import { FilmsService } from '../../../services/films.service';
import { Film} from '../../../models/film';


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
  userId: string = '';
  userFilms: Film[] = [];

  constructor(public auth: AuthService, private fs: FilmsService) {}

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
      console.log(status)
      if (status) {
        this.fs.getUserFilmsList()
        .subscribe(res => {
          this.userId = this.auth.getPersistedUserId();
          for (let i = 0; i < res.data.length; i++) {
            if (this.userId === res.data[i].user.documentId) {
              this.userFilms.push(res.data[i]);
            }
          }
          console.log(this.userFilms);
        });
      }
    });
  }
}
