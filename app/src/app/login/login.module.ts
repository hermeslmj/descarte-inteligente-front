import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
  declarations: [AutenticacaoComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
