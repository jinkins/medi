import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { X400 } from './x400';

@Injectable()
export class X400Service {
    constructor(private httpClient: HttpClient) { }

    getAllX400() {
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.get<X400[]>(environment.url + 'x400' + token);
    }

    searchX400(filters: string[]) {
        let r = {};
        for (let key in filters) {
            if (filters[key]) {
                r[key] = filters[key];
            }
        }
        console.log(filters);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.post<X400[]>(environment.url + 'x400/search' + token, r);
}
}
