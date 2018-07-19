import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministradorComponent} from './administrador.component';
import {ClienteComponent} from './cliente/cliente.component';

const ROUTES: Routes = [
  { path: '', component: AdministradorComponent },
  { path: 'clientes', component: ClienteComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministradorRoutingModule{ }
