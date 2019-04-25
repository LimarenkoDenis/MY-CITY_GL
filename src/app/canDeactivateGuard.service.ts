import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
    providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
    public canDeactivate(
        component: ComponentCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot,
    ): boolean | Observable<boolean> {


        console.log(component, 'component');
        console.log(currentRoute, 'currentRoute');
        console.log(currentState, 'currentState');
        console.log(nextState, 'nextState');

        if (nextState.url.includes('home')) {
            return true;
        }

        return false;
    }
}
