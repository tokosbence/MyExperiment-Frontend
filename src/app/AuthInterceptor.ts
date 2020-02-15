import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
      
}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = "Bearer ";
    const token = localStorage.getItem('currentUser');

    if (!!token)
        {
        const authReq = req.clone({headers: req.headers.set('Authorization', authHeader+token)});
        return next.handle(authReq);
        }

    return next.handle(req);   
   
  }

  
}
