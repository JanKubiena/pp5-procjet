import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsApiService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8359af2a0fd42384bf50755a7e3d87c3&language=pl-PL&page=1';

  constructor(private http: HttpClient) {}

  getNowPlayingMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
