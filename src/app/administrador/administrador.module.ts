import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import {AdministradorRoutingModule} from './administrador-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import {ClienteService} from './cliente/cliente.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdministradorComponent,
    ClienteComponent,
    ClienteListaComponent,
  ],
  providers: [
    ClienteService
  ]
})
export class AdministradorModule { }
