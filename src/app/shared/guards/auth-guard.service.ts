import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../user.service';
import { TOKEN_NAME } from '../auth.constant';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService, private jwtHelper: JwtHelperService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem(TOKEN_NAME) == null || this.jwtHelper.isTokenExpired(localStorage.getItem(TOKEN_NAME))) {
            this.router.navigate(['login'], { queryParams: { redirectTo: state.url } });
            return false;
        } else {
            return true;
        }
    }
}
