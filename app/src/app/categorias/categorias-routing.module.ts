import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from '../categorias/lista/lista.component';
import { CadastroComponent } from '../categorias/cadastro/cadastro.component';
import { EdicaoComponent } from '../categorias/edicao/edicao.component';
  
const routes: Routes = [
  {path : 'cadastro', component : CadastroComponent},
  {path : 'lista', component : ListaComponent},
  {path : 'edicao/:id', component : EdicaoComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }