import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logado = false;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuarioService.carregadoEmissor.subscribe(value => {
      this.logado = value;
    });
  }

  deslogar() {
    this.usuarioService.deslogar();
    this.router.navigate(['login']);
  }

}
