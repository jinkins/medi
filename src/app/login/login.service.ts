import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) { }

    login(username: string, password: string) {
        console.log(username, password);
        const body = { username: username, password: password };
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<User>(environment.url + 'user/login', body, { headers: headers });
    }
    logout() {
        localStorage.clear();
    }
    isAuthentificated() {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
}
