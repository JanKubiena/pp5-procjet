import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AuthService } from './authentication.service';
import { FilmsApiResponse, SingleFilmApiResponse, PostFilm, Film } from '../models/film';
;

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  filmsUrl = 'http://localhost:8082/api/films';
  userId: string = '';
  userFilms: Film[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUserFilmsList(): Film[] {
    this.http.get<FilmsApiResponse>(`${this.filmsUrl}?populate=*`, this.auth.getAuthHeader()).subscribe(res => {
      this.userId = this.auth.getPersistedUserId();
      for (let i = 0; i < res.data.length; i++) {
        if (this.userId === res.data[i].user.documentId) {
          this.userFilms.push(res.data[i]);
        }
      }
    });
  return this.userFilms;
  }

  addFilm(film: PostFilm) {
    let dataToPost = {
      data: film
    };
    return this.http.post(`${this.filmsUrl}?populate=*`, dataToPost, this.auth.getAuthHeader());
  }

  getFilmById(id: string): Observable<SingleFilmApiResponse> {
    return this.http.get<SingleFilmApiResponse>(`${this.filmsUrl}/${id}?populate=*`, this.auth.getAuthHeader());
  }
}
