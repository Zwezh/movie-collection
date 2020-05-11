import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '@appComponents/loader';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

    constructor(private loadingScreenService: LoaderService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingScreenService.startLoading();
        return next.handle(request).pipe(finalize(() => this.loadingScreenService.stopLoading()));
    };

}