import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
    public constructor(private router: Router) {}
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log(route, state);
        if (route.params.noteid < 50) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}






























        // if (route.params.noteid > 50) {
        //     this.router.navigate(['/']);
        //     return false;
        // }
        // return true;