import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from '../components/loader/services/loader.service';


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

    private _activeRequests: number;

    constructor(private loadingScreenService: LoaderService) {
        this._activeRequests = 0;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._activeRequests === 0) {
            this.loadingScreenService.startLoading();
        }

        this._activeRequests++;
        return next.handle(request).pipe(
            finalize(() => {
                this._activeRequests--;
                if (this._activeRequests === 0) {
                    this.loadingScreenService.stopLoading();
                }
            })
        )
    };

}