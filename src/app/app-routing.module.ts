import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {AvaliacaoComponent} from './avaliacao/avaliacao.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ColaboradoresComponent} from './colaboradores/colaboradores.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'avaliacoes', component: AvaliacaoComponent, canActivate: [AuthGuardService] },
  { path: 'avaliacoes2', component: AvaliacaoComponent, canActivate: [AuthGuardService] },
  { path: 'colaboradores', component: ColaboradoresComponent, canActivate: [AuthGuardService] },
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
