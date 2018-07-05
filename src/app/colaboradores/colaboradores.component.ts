import { Component, OnInit } from '@angular/core';
import {Colaborador} from './colaborador.model';
import {ColaboradorService} from './colaborador.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  colaboradores: Colaborador[];
  constructor(
    private colaboradorService: ColaboradorService
  ) { }

  ngOnInit() {
    this.carregaColaboradores();
  }

  carregaColaboradores() {
    this.colaboradorService.carregadoEmissor.subscribe(value => {
      if (value) {
        this.colaboradores = this.colaboradorService.getColaboradores();
      }
    });
  }

}
