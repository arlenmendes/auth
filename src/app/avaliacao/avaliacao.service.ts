import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { config } from '../config';
import {UsuarioService} from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private hostapi = config.hostapi;

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  getAvaliacoes() {
    return this.http.get(this.hostapi + '/avaliacoes/' + this.usuarioService.getId());
  }
}
