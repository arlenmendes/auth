import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import { AdministradorModule } from './administrador/administrador.module';
import { ClienteModule } from './cliente/cliente.module';
import {AuthGuardAdministradorService} from './services/auth-guard-administrador.service';
import {AuthGuardClienteService} from './services/auth-guard-cliente.service';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'administrador', loadChildren: () => AdministradorModule, canActivate: [AuthGuardAdministradorService] },
  { path: 'cliente', loadChildren: () => ClienteModule, canActivate: [AuthGuardClienteService] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginService
  ]
})
export class AppRoutingModule { }
