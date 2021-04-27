import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';


const routes: Routes = [
  {path : 'auth', component : AutenticacaoComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }