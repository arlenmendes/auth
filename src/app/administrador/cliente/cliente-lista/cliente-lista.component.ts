import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Observable} from 'rxjs';
import {Cliente} from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clientes: Observable<Cliente[]>;
  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.carregaClientes();
  }

  carregaClientes() {
    this.clientes = this.clienteService.getListaClientes();
  }

}
