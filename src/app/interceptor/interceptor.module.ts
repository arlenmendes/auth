import {Injectable, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {UsuarioService} from '../usuario/usuario.service';
import {Router} from '@angular/router';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {

  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let ok: string;

    if (localStorage.getItem('token') != null) {
      const requestModificada = req.clone({
        headers: req.headers.set('Accept', 'beaver ' + localStorage.getItem('token')),
      });
      return next
        .handle(requestModificada)
        .pipe(
          tap(
            event => ok = event instanceof HttpResponse ? 'sucesso' : '',
              error => ok = 'erro'
          ),
          finalize(() => {
            console.log(ok)
            if (ok === 'erro') {
              if (event.status === 401) {
                this.usuarioService.deslogar();
                this.router.navigate(['login']);
              }
            }
          })
        );
    } else {console.log('enviando requisição sem token')
      return next.handle(req);
    }
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true
    }
  ],
  declarations: []
})
export class InterceptorModule { }
