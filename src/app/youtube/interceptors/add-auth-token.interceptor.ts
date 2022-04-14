import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { keyToken, url } from '@src/app/shared/variable';

@Injectable()
export class AddAuthTokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      url: url + request.url,
      setParams: {
        key: keyToken,
      } });
    return next.handle(req);
  }
}
