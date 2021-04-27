import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { UsuariosModule } from './usuarios/usuarios.module';

const routes: Routes = [
  {
    path: 'usuarios', loadChildren: () => UsuariosModule
  },
  {
    path: 'login', loadChildren: () => LoginModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
