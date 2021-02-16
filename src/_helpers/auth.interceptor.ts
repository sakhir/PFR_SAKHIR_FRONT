// import { AuthService } from '../app/services/auth.service';
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private authSer: AuthService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     //console.log(request);
//     if (this.authSer.isLogin()) {
//       alert('ok')
//       const authToken = this.authSer.getAuthorizationToken();
//      // console.log(authToken);
//       request = request.clone({
//           headers: request.headers.set('Authorization', 'Bearer ' + authToken)
//       });
//     }
    
//     return next.handle(request);
//   }
// }

import { HttpEvent,  HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      //return du json
      req = req.clone({ headers: req.headers.set('Accept', 'application/json')})
      const cloneRequest = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer '+ token)})
      return next.handle(cloneRequest);
    }else {
      return next.handle(req);
    } 
  }
}


export const InterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}