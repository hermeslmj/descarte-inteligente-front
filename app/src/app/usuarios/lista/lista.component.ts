import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/Usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private _listaUsuarios: Array<Usuario>;

  constructor(private usuarioSerivce: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioSerivce.getAll().subscribe(usuarios => {
      this._listaUsuarios = usuarios;
      console.log(this._listaUsuarios);
    },
    err => {
      console.log(err);
    });
  }

}
