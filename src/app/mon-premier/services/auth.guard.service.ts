import { AuthService } from "./auth.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuth){
            return true;
        }else{
            this.router.navigate(['/auth']);
        }
    } 
}