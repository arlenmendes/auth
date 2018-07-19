import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdministradorService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (localStorage.getItem('token') != null) {
      if (JSON.parse(localStorage.getItem('usuario')).admin) {
        return true;
      } else {
        this.router.navigate(['cliente']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
