import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { StorageService } from './storage.service';

interface AuthResponse {
  jwt: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private starpiUrl = 'http://127.0.0.1:8082/api/auth/local';
  private loginTracker: BehaviorSubject<boolean>;
    
  loggedInStatus$;

  constructor(private http: HttpClient, private ss: StorageService) {
    this.loginTracker = new BehaviorSubject(this.checkIfLoggedIn());
    this.loggedInStatus$ = this.loginTracker.asObservable();
  }

  login(identifier?: string, password?: string) {
    return this.http.post<AuthResponse>(this.starpiUrl, { identifier, password });
  }

  register(username?: string, email?: string, password?: string) {
    return this.http.post<AuthResponse>(`${this.starpiUrl}/register`, { username, email, password });
  }

  checkIfLoggedIn() {
    return this.ss.getItem('loggedIn') === 'true';
}

  persistUser(resp: AuthResponse) {
    [
      ['userId', resp.user.id],
      ['userEmail', resp.user.email],
      ['username', resp.user.username],
      ['loggedIn', 'true'],
      ['token', resp.jwt]
    ].forEach(item => this.ss.setItem(item[0], item[1]));
    this.loginTracker.next(true);
  }

  getPersistedUser(): User {
    return {
      id: this.ss.getItem('userId') || '',
      username: this.ss.getItem('username') || '',
      email: this.ss.getItem('userEmail') || ''
    };
  }

  getPersistedToken(): string {
    return this.ss.getItem('token') || '';
  }

  logout() {
    ['userId', 'userEmail', 'username', 'loggedIn', 'token'].forEach(item => this.ss.removeItem(item));
    this.loginTracker.next(false);
  }

  getAuthHeader() {
    return {
      headers: { 'Authorization': `Bearer ${this.getPersistedToken()}` }
    };
  };
}
