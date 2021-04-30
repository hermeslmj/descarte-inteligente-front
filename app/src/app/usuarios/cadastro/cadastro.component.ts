import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/Usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private _listaEstados;
  usuarioForm = this.formBuilder.group({
    nome: '',
    email: '',
    password: '',
    idade: '',
    estado: '',
    cidade: ''
  });

  constructor(
    private usuarioServico: UsuariosService, 
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: Router
  ) 
  { 
    this._listaEstados = this.usuarioServico.getEstados();
  }

  ngOnInit(): void {

  }

  cadastrar() : void {
    this.usuarioServico.post(this.usuarioForm.value as Usuario).subscribe(res => {
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

  getEstados() : Array<string> {
    return this._listaEstados;
  }


}
