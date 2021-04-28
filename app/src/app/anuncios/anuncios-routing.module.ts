import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ListaComponent } from './lista/lista.component';
  
const routes: Routes = [
  {path : 'detalhes', component : DetalhesComponent},
  {path : 'cadastro', component : CadastroComponent},
  {path : 'edicao', component : EdicaoComponent},
  {path : 'lista', component : ListaComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }