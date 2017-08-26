import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from './auth.constant';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

        return this.http.post(environment.authTokenUrl, body, { headers })
            .map(res => res.json())
            .map((res: any) => {
                if (res.access_token) {
                    return res.access_token;
                }
                return null;
            });
    }
}
