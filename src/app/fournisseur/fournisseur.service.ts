import { Fournisseur } from './fournisseur';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FournisseurService {
    constructor(private httpClient: HttpClient) { }

    getSuppliers() {
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.get<Fournisseur[]>('http://localhost:8080/suppliers' + token);
    }

    search(filters: string[]) {
        let r = {};
        for (let key in filters) {
            if (filters[key]) {
                r[key] = filters[key];
            }
        }
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.httpClient.post<Fournisseur[]>('http://localhost:8080/suppliers/search' + token, r);
    }
}
