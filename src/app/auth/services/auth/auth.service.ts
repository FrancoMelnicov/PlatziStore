import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

//enviroments
import { environment } from './../../../../environments/environment';

//models
import { Auth } from './../../models/auth';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.api_url}/api/v1`

  constructor(
    private _http: HttpClient,
    private route: Router
  ) { }

  loginUser(email: string, password: string){
    return this._http.post<Auth>(`${this.apiUrl}/auth/login`, {email, password})
    .pipe(
      tap(response => localStorage.setItem('access_token', response.access_token))
    )
  }

  getProfileUser(){
    return this._http.get<User>(`${this.apiUrl}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .pipe(
      tap(response => {
        localStorage.setItem('user_name', response.name);
        this.route.navigate(['/'])
      })
    )
  }

  loginAndGetProfile(email: string, password: string){
    return this.loginUser(email, password).
    pipe(
      switchMap(res => this.getProfileUser())
    )
  }
}
