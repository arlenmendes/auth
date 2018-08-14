import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../config';
import {UsuarioService} from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostapi = config.hostapi;


  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  logar(dados: {login: string, senha: string}) {
    return this.http.post(this.hostapi + '/auth/login', dados);
  }

  async validarToken() {
    await this.http.get(this.hostapi + '/auth/validar-token').toPromise().then(res => {
      this.usuarioService.carregaUsuario();

    }, err => {
      localStorage.clear();
    });
  }
}
