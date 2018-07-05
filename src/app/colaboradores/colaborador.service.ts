import {Injectable, OnInit} from '@angular/core';
import {config} from '../config';
import {HttpClient} from '@angular/common/http';
import {Colaborador} from './colaborador.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  hostapi = config.hostapi;
  colaboradores: Colaborador[];
  private _carregado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public carregadoEmissor: Observable<boolean> = this._carregado.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.carregaColaboradores();
  }

  async carregaColaboradores() {

    await this.http.get(this.hostapi + '/colaboradores').subscribe(resposta => {
      this.colaboradores = resposta;
      this._carregado.next(true);
    });
  }

  getColaboradores() {
    return this.colaboradores;
  }
}
