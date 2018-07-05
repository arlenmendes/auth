import { Injectable } from '@angular/core';
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
    this.usuario.id = localStorage.getItem('usuarioId');
    this.usuario.nome = localStorage.getItem('usuarioNome');
    this.usuario.funcao = localStorage.getItem('usuarioFuncao');
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
}
