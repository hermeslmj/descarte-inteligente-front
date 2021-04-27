import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [CadastroComponent, DetalhesComponent, EdicaoComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
