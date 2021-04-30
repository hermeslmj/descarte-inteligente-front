import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [CadastroComponent, DetalhesComponent, EdicaoComponent, ListaComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
