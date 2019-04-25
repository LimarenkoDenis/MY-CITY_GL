import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';



@Injectable({
    providedIn: 'root',
})
export class NoteResolver implements Resolve<Observable<any>> {

    resolve(): Observable<any> {
        return of(
            {
                id: 1,
                user: 'Tom',
                data: '11/12/2016',
                note: 'simple text'
            }
        ).pipe(
            delay(5000)
        );
    }
}
