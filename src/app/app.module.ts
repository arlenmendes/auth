import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { AuthGuardService } from './services/auth-guard.service';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [
    UsuarioService, AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
