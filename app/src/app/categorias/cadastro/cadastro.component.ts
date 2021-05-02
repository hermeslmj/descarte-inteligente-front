import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/shared/models/Categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  categoriaForm = this.formBuilder.group({
    nome: '',
  });

  constructor(
    private categoriaService: CategoriaService, 
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: Router) { }

  ngOnInit(): void {
  }

  cadastrar() : void {
    this.categoriaService.post(this.categoriaForm.value as Categoria).subscribe(res => {
      if(res._id) {
        this.toastrService.success("Cadastro realizado com sucesso");
        this.route.navigate(["/categorias/lista"]);
      }
    },
    error => {
      this.toastrService.error("Problema ao efetuar o cadastro, tente novamente mais tarde");
      console.log(error);
    });
  }

}
