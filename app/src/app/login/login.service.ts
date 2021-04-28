import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl: string;

  constructor(private http: HttpClient) { 
    this._loginUrl = "http://localhost:1000/api/login";
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post
    (
      this._loginUrl,
      {
        "email": email,
        "password": senha
      }
    );
  }
}
