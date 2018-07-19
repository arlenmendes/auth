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
  logado: boolean;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private usuarioService: UsuarioService
  ) {

  }

  ngOnInit() {

    this.usuarioService.carregadoEmissor.subscribe(valor => {
      this.logado = valor;
    });

    if (localStorage.getItem('token') != null) {
      this.usuarioService.carregaUsuario();
      this.loginService.validarToken();
    } else {
      this.router.navigate(['login']);
    }
  }
}
