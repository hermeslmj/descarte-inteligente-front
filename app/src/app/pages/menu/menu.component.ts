import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  estahLogado(): boolean {
    return this.loginService.estahLogado();
  }

  logout(): void {
    this.loginService.logout();
    window.location.reload();
  }

}
