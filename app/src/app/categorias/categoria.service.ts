import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../shared/models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _categoriasUrl;

  constructor(private http: HttpClient) {
    this._categoriasUrl = "http://localhost:1000/api/categorias";
  }

  getAll(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(this._categoriasUrl);
  }

  getById(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(this._categoriasUrl + id);
  }

  post(categoria: Categoria): Observable<any> {
    return this.http.post(this._categoriasUrl, categoria);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this._categoriasUrl + id);
  }

  put(id: string, categoria: Categoria): Observable<any> {
    return this.http.put(this._categoriasUrl + id, categoria);
  }

}
