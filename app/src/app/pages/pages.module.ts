import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class PagesModule { }
