import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Router} from '@angular/router';
import {Usuario} from '../usuario/usuario.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logado = false;

  constructor(
    private usuarioService: UsuarioService
  ) {

  }

  async ngOnInit() {
    await this.usuarioService.carregadoEmissor.subscribe(value => {
      this.logado = value;
    });

  }

  usuarioPrimeiroNome() {
    return this.usuarioService.getPrimeiroNome();
  }

  usuarioFuncao() {
    return this.usuarioService.getFuncao();
  }

  isAdmin() {
    return this.usuarioService.isAdmin();
  }

}
