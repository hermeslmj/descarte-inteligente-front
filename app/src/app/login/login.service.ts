import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../shared/models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl: string;

  constructor(private http: HttpClient) { 
    this._loginUrl = "http://localhost:1000/api/login";
  }

  login(dados: Login): Observable<any> {
    return this.http.post
    (
      this._loginUrl,
      dados
    );
  }
}
