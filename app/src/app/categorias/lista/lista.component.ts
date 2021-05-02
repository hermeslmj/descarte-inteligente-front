import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/shared/models/Categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaCategorias: Array<Categoria>;

  constructor
  (
    private categoriaService: CategoriaService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(categorias => {
      this.listaCategorias = categorias;
    },
    error => {
      console.log(error);
      this.toastrService.error(error.message);
    });
  }

}
