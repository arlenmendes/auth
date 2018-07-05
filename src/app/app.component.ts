import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login/login.service';
import {UsuarioService} from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private usuarioService: UsuarioService
  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.loginService.validarToken();
    } else {
      this.router.navigate(['login']);
    }
  }
}
