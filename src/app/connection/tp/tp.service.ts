import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { TP } from './tp';

@Injectable()
export class TPService {
    constructor(private httpClient: HttpClient) { }

    getTPs() {
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.get<TP[]>(environment.url + 'tp' + token);
    }

    searchTP(filters: string[]) {
        let r = {};
        for (let key in filters) {
            if (filters[key]) {
                r[key] = filters[key];
            }
        }
        console.log(filters);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.post<TP[]>(environment.url + 'tp/search' + token, r);
    }
}
