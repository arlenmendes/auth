import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {LoginModule} from './login/login.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {AvaliacaoModule} from './avaliacao/avaliacao.module';
import {UsuarioService} from './usuario/usuario.service';
import { InterceptorModule} from './interceptor/interceptor.module';
import {AuthGuardService} from './services/auth-guard.service';
import {AvaliacaoService} from './avaliacao/avaliacao.service';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import {ColaboradorService} from './colaboradores/colaborador.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AvaliacaoModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [
    UsuarioService, AuthGuardService, AvaliacaoService, ColaboradorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
