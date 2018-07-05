import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvaliacaoComponent, ListagemComponent]
})
export class AvaliacaoModule { }
