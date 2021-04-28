import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor
  (
    private loginService: LoginService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  login(): void {
    this.loginService.login(this.email.value,this.password.value).subscribe(
      loggedIn => {
        
        if(loggedIn) {
          this.toastrService.success("Login realizado com sucesso");
          this.router.navigate(['/anuncios/lista']);
        }
        else{
          this.toastrService.error("Falha ao efetuar login");
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
