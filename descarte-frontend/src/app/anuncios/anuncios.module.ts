import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChatComponent } from './chat/chat.component';
import { ImagensComponent } from './imagens/imagens.component';
import { CategoriasComponent } from './categorias/categorias.component';



@NgModule({
  declarations: [CadastroComponent, ChatComponent, ImagensComponent, CategoriasComponent],
  imports: [
    CommonModule
  ]
})
export class AnunciosModule { }
