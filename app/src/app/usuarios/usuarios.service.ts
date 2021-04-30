import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _usuariosUrl;
  constructor(private http: HttpClient)
  {
    this._usuariosUrl = "http://localhost:1000/api/usuario/";
  }

  getAll(): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(this._usuariosUrl);
  }

  getById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(this._usuariosUrl + id);
  }

  post(usuario: Usuario): Observable<any> {
    return this.http.post(this._usuariosUrl, usuario);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this._usuariosUrl + id);
  }

  put(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(this._usuariosUrl + id, usuario);
  }


  getEstados() {
    let estados =
    [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins"
    ];
    return estados;
  }
  

}
