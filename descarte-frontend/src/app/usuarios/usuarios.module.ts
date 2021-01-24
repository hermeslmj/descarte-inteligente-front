import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PermissaoComponent } from './permissao/permissao.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [LoginComponent, PermissaoComponent, CadastroComponent],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
