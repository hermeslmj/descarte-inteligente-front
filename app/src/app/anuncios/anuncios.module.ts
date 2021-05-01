import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { AnunciosRoutingModule } from './anuncios-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AnunciosService } from './anuncios.service';



@NgModule({
  declarations: [CadastroComponent, DetalhesComponent, EdicaoComponent, ListaComponent],
  imports: [
    CommonModule,
    AnunciosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AnunciosService
  ]
  
})
export class AnunciosModule { }
