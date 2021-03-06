import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseApiService {

    private _apiPrefix: string;

    constructor(protected http: HttpClient) {
        this._apiPrefix = 'api/';
    }

    protected get(url: string, params?: any): Observable<any> {
        return this.http.get(`${this._apiPrefix}${url}`, { params });
    }

    protected post(url: string, params?: any): Observable<any> {
        return this.http.post(`${this._apiPrefix}${url}`, params);
    }

    protected put(url: string, params?: any): Observable<any> {

        return this.http.put(`${this._apiPrefix}${url}`, params);
    }

    protected delete(url: string, params?: any): Observable<any> {
        return this.http.delete(`${this._apiPrefix}${url}`, params);
    }
}