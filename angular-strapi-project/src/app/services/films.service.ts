import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film, ApiResponse } from '../models/film';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

filmsUrl = 'http://localhost:8082/api/films?populate=*';

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUserFilmsList() {
    return this.http.get<ApiResponse>(this.filmsUrl, this.auth.getAuthHeader());
  
}
}
