import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AuthService } from './authentication.service';
import { User } from '../models/user'
;

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userUrl = 'https://strapi-film-api.onrender.com/api/users';

    constructor(private http: HttpClient, private auth: AuthService) {}

    getUser(): Observable<User> {
        return this.http.get<User>(`${this.userUrl}/me`, this.auth.getAuthHeader());
    }
}