import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//enviroments
import { environment } from 'src/environments/environment';

//models
import { CreateUserDTO, User } from './../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.api_url}/api/v1`;

  constructor(
    private _http: HttpClient
  ) { }

  createUser(user: CreateUserDTO){
    return this._http.post<User>(`${this.apiUrl}/users`, user)
  }

  getAllUsers(){
    return this._http.get(`${this.apiUrl}/users`)
  }
}