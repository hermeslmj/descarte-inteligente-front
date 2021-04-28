import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { AnunciosRoutingModule } from './anuncios-routing.module';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [CadastroComponent, DetalhesComponent, EdicaoComponent, ListaComponent],
  imports: [
    CommonModule,
    AnunciosRoutingModule
  ]
})
export class AnunciosModule { }
