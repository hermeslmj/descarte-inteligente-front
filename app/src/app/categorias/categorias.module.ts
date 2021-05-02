import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasRoutingModule } from './categorias-routing.module';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { EdicaoComponent } from './edicao/edicao.component';



@NgModule({
  declarations: [CadastroComponent, ListaComponent, EdicaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
