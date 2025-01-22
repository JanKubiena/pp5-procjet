import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { FilmsApiResponse, PostFilm } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  filmsUrl = 'http://localhost:8082/api/films?populate=*';

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUserFilmsList() {
    return this.http.get<FilmsApiResponse>(this.filmsUrl, this.auth.getAuthHeader());
  
  }

  addFilm(film: PostFilm) {
    let dataToPost = {
      data: film
    };
    return this.http.post(this.filmsUrl, dataToPost, this.auth.getAuthHeader());
  }
}
