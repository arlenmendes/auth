import { Component, OnInit } from '@angular/core';
import {Avaliacao} from './avaliacao.model';
import {AvaliacaoService} from './avaliacao.service';
import {UsuarioService} from '../usuario/usuario.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  avaliacoes: Avaliacao[];
  avaliacaoModal: Avaliacao;
  constructor(
    private avaliacaoService: AvaliacaoService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.avaliacaoModal = new Avaliacao();
    this.carregaAvaliacoes();
  }

  carregaAvaliacoes() {
    this.usuarioService.carregadoEmissor.subscribe(value => {
      if (value) {
        this.avaliacaoService.getAvaliacoes().subscribe(resposta => {
          console.log(resposta);
          this.avaliacoes = resposta.avaliador;
        });
      }
    });

  }

  situacao(avaliacao: Avaliacao) {
    if (avaliacao.colaboradoresEnviadosIds != null) {
      if (avaliacao.avaliados.length === avaliacao.colaboradoresEnviadosIds.length) {
        if (avaliacao.finalizado) {
          if (avaliacao.disponivel) {
            return 'Disponível';
          }
          return 'Finalizada Pelo gestor.';
        }
        return 'Equipe Completou Avaliação';
      }
    }
    return 'pendente';
  }

  setAvaliacaoModal(avaliacao) {
    this.avaliacaoModal = avaliacao;
  }

}
