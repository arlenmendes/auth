import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';
import {RespostaLogin} from './resposta-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  carregando = false;
  mensagem: string;
  mensagem_erro = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
    const token = localStorage.getItem('token');

    if (token) {

      if (this.usuarioService.isAdmin()) {
        this.router.navigate(['administrador']);
      } else {
        this.router.navigate(['cliente']);
      }
    }
  }

  async logar(form: any) {
    const dados = {
      login: form.login,
      senha: form.senha
    };
    this.carregando = true;

    await this.loginService.logar(dados).subscribe((response: RespostaLogin)  => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('usuario', JSON.stringify(response.usuario));
      this.usuarioService.carregaUsuario();
      if (this.usuarioService.isAdmin()) {
        this.router.navigate(['administrador']);
      } else {
        this.router.navigate(['cliente']);
      }
    }, err => {
      console.log(err);
      this.mensagem = err.error.mensagem;
      this.mensagem_erro = true;
      this.carregando = false;
    });
  }

}
