import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
