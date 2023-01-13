import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPerson } from 'src/app/model/login-person';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  LoginPerson: LoginPerson | undefined;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj: string | undefined;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() { }

  onLogin(): void {
    this.LoginPerson = new LoginPerson(this.nombreUsuario, this.password);
    this.authService.getUsuarioByName(this.nombreUsuario).subscribe(data => {
      if (data.password == this.LoginPerson?.password){
        this.isLogged = true;
        this.tokenService.setUserName(data.nombre);
        this.tokenService.setAuthorities(data.roles);
        alert('Bienvenido ' + data.nombre);
        this.router.navigate(['/portfolio']);
      }
      else{
        this.isLogged = false;
      }
    },
    err => {
      this.isLogged = false;
      alert('Contraseña incorrecta');
      
    })
  }
}