import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/shared/models/Login';
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


    if(this.email.value == "" || this.password.value == "")
    {
      this.toastrService.error("Email ou senha em branco");
    }
    else
    {
      let loginModel = new Login();
      
      loginModel.email = this.email.value;
      loginModel.password = this.password.value;

      this.loginService.login(loginModel).subscribe(
        loggedIn => {
          if(loggedIn) {
            this.toastrService.success("Login realizado com sucesso");
            this.loginService.gravaUsuarioStorage(loginModel.email, "602c2d9b054ab4541d40a763");
            this.router.navigate(['/anuncios/lista']);
          }
          else{
            this.toastrService.error("Email ou Senha inválidos","Falha ao efetuar login");
          }
        },
        err => {
          console.log(err);
        }
      );
    }

   
  }

}
