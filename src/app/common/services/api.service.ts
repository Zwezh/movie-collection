import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiService {

    private _apiPrefix = 'api/';

    constructor(protected http: HttpClient) { }

    protected get(url: string, params?: any): Observable<any> {
        return this.http.get(`${this._apiPrefix}${url}`, { params })
    }

    protected post(url: string, params?: any): Observable<any> {
        return this.http.post(`${this._apiPrefix}${url}`, { params });
    }

    protected put(url: string, params?: any): Observable<any> {

        return this.http.put(url, { params });
    }

    protected delete(url: string, params?: any): Observable<any> {
        return this.http.post(url, { params });
    }
}