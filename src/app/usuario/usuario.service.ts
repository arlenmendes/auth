import {Injectable, OnInit} from '@angular/core';
import {Usuario} from './usuario.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: Usuario;
  private _carregado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public carregadoEmissor: Observable<boolean> = this._carregado.asObservable();
  constructor() {

  }

  carregaUsuario() {
    this.usuario = new Usuario;

    const dados = JSON.parse(localStorage.getItem('usuario'));

    this.usuario.id = dados.id;
    this.usuario.nome = dados.nome;
    this.usuario.funcao = dados.funcao;
    this.usuario.admin = dados.admin;
    this._carregado.next(true);
  }

  getUsuario() {
    return this.usuario;
  }

  deslogar() {
    localStorage.clear();
    this._carregado.next(false);
  }

  getPrimeiroNome() {
    return this.usuario.nome.split(' ')[0];
  }

  getFuncao() {
    return this.usuario.funcao;
  }

  getId() {
    return this.usuario.id;
  }

  isAdmin() {
    return this.usuario.admin;
  }
}
