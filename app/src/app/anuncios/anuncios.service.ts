import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncios } from '../shared/models/Anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  private _anunciosUrl: string;

  constructor(private http: HttpClient) {
    this._anunciosUrl = "http://localhost:1000/api/anuncios/";
  }

  getAll(): Observable<Array<Anuncios>> {
    return this.http.get<Array<Anuncios>>(this._anunciosUrl);
  }

  getById(id: string): Observable<Anuncios> {
    return this.http.get<Anuncios>(this._anunciosUrl + id);
  }

  post(anuncio: Anuncios): Observable<any> {
    return this.http.post(this._anunciosUrl, anuncio);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this._anunciosUrl + id);
  }

  put(id: string, anuncio: Anuncios): Observable<any> {
    return this.http.put(this._anunciosUrl + id, anuncio);
  }

}
