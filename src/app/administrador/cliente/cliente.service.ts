import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { config } from '../../config';
import {Observable} from 'rxjs';
import {Cliente} from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiUrl = config.hostapi;
  constructor(
    private http: HttpClient
  ) { }

  getListaClientes(): Observable<any[]> {
    return this.http.get(this.apiUrl + '/clientes');
  }

}
