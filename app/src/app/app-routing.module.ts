import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnunciosModule } from './anuncios/anuncios.module';
import { LoginModule } from './login/login.module';
import { UsuariosModule } from './usuarios/usuarios.module';

const routes: Routes = [
  {
    path: 'usuarios', loadChildren: () => UsuariosModule
  },
  {
    path: 'login', loadChildren: () => LoginModule
  },
  {
    path: 'anuncios', loadChildren: () => AnunciosModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
