import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { AnunciosService } from '../anuncios.service';
import { Categoria } from 'src/app/shared/models/Categoria';
import { Anuncios } from 'src/app/shared/models/Anuncios';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private _listaCategorias: Array<Categoria>;

  anuncioForm = this.formBuilder.group({
    titulo: '',
    descricao: '',
    categoria: '',
    criado_em: new Date(),
    atualizado_em: new Date(),
    status: 1,
    publicado_por: this.loginService.getUsuarioLogado()
  });

  constructor(
    private formBuilder: FormBuilder, 
    private toastrService: ToastrService, 
    private route: Router,
    private categoriaService: CategoriaService,
    private anuncioService: AnunciosService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(categorias => {
      this._listaCategorias = categorias;
    },
    error => {
      console.log("Erro ao buscar categorias");
    })
  }

  getCategorias() {
    return this._listaCategorias;
  }


  cadastrar() : void {
    this.anuncioService.post(this.anuncioForm.value as Anuncios).subscribe(res => {
      if(res._id) {
        this.toastrService.success("Cadastro realizado com sucesso");
        this.route.navigate(["/anuncios/lista"]);
      }
    },
    error => {
      this.toastrService.error("Problema ao efetuar o cadastro, tente novamente mais tarde");
      console.log(error);
    });
  }

}
