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

  filmsUrl = 'https://strapi-film-api.onrender.com/api/films';
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
    return this.http.post(`${this.filmsUrl}?populate=*`, { data: film }, this.auth.getAuthHeader());
  }

  getFilmById(documentId: string): Observable<SingleFilmApiResponse> {
    return this.http.get<SingleFilmApiResponse>(`${this.filmsUrl}/${documentId}?populate=*`, this.auth.getAuthHeader());
  }

  updateFilm(film: PostFilm, documentId: string): Observable<any> {
    return this.http.put(`${this.filmsUrl}/${documentId}?populate=*`, { data: film }, this.auth.getAuthHeader());
  }

  deleteFilm(documentId: string): Observable<any> {
    return this.http.delete(`${this.filmsUrl}/${documentId}`, this.auth.getAuthHeader());
  }
}
