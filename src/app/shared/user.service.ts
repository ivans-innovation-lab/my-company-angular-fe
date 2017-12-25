import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { TOKEN_NAME } from './auth.constant';


@Injectable()
export class UserService {
    // jwtHelper: JwtHelperService = new JwtHelperService(null);
    accessToken: string;
    isAdmin: boolean;

    constructor(private jwtHelper: JwtHelperService) {
        if (localStorage.getItem(TOKEN_NAME)) {
            this.login(localStorage.getItem(TOKEN_NAME));
        }else {
            this.accessToken = null;
            this.isAdmin = false;
        }
    }

    login(accessToken: string) {
        const decodedToken = this.jwtHelper.decodeToken(accessToken);
        this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
        this.accessToken = accessToken;
        localStorage.setItem(TOKEN_NAME, accessToken);
    }

    logout() {
        this.accessToken = null;
        this.isAdmin = false;
        localStorage.removeItem(TOKEN_NAME);
    }

    isAdminUser(): boolean {
        return this.isAdmin;
    }

    isUser(): boolean {
        return this.accessToken && !this.isAdmin;
    }

    isAuthenticated(): boolean {
        return this.accessToken && true;
    }
}
