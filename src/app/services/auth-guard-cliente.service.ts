import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardClienteService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (localStorage.getItem('token') != null) {
      if (!JSON.parse(localStorage.getItem('usuario')).admin) {
        return true;
      } else {
        this.router.navigate(['administrador']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
