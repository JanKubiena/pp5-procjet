import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
  private apiUrl = 'http://127.0.0.1:8082/api/auth/local';

  constructor(private http: HttpClient, private router: Router) {}

  login(formData: { identifier: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, formData).pipe(
      tap((res: any) => {
        if (res.jwt) {
          localStorage.setItem('jwt', res.jwt);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
