import { Component, OnInit } from '@angular/core';
import { Anuncios } from 'src/app/shared/models/Anuncios';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private _listaAnuncios: Array<Anuncios>;

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit(): void {
    this.anunciosService.getAll().subscribe(anuncios => {
      this._listaAnuncios = anuncios;
      console.log(this._listaAnuncios);
    },
    err => {
      console.log(err);
    });
  }

}
