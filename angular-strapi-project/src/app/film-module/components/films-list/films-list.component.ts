import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film, ApiResponse } from '../../../models/film';
import { CommonModule } from '@angular/common';

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
  filmsUrl = 'http://localhost:8082/api/films';
  films: Film[] = [];

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
      console.log(status)
      if (status) {
        this.http.get<ApiResponse>(this.filmsUrl, this.auth.getAuthHeader()).subscribe(res => {
          console.log(res.data);
          this.films = res.data;
        });
      }
    });
  }

}
