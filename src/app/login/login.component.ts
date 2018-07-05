import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';

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
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['/avaliacoes']);
    }
  }

  async logar(form: any) {
    const dados = {
      email: form.email,
      senha: form.senha
    };
    this.carregando = true;

    await this.loginService.logar(dados).subscribe(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('usuarioNome', response.nome);
      localStorage.setItem('usuarioId', response.id);
      localStorage.setItem('usuarioFuncao', response.funcao);
      console.log('sw')
      this.usuarioService.carregaUsuario();
      this.router.navigate(['/avaliacoes']);
    }, err => {
      this.mensagem = err.error;
      this.mensagem_erro = true;
      this.carregando = false;
    });
  }

}
