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

  logar(dados: {email: string, senha: string}) {
    return this.http.post(this.hostapi + '/login', dados);
  }

  async validarToken() {
    const options = {'Content-type': 'application/json'}
    await this.http.get(this.hostapi + '/validar-token', options).toPromise().then(res => {
      this.usuarioService.carregaUsuario();

    }, err => {
      localStorage.clear();
    });
  }
}
