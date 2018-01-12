import { Injectable } from '@angular/core';
import { Connection } from './connection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ConnectionService {

    constructor(private httpClient: HttpClient) { }

    private connections: Connection[] = [];

    getConnections() {
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.get<Connection[]>(environment.url + 'connections' + token);
    }

    searchConnection(filters: string[]) {
            let r = {};
            for (let key in filters) {
                if (filters[key]) {
                    r[key] = filters[key];
                }
            }
            console.log(filters);
            const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
            return this.httpClient.post<Connection[]>('http://localhost:8080/connections/search' + token, r);
    }
}
