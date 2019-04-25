import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const notes: any = {
    42: {
        message: 'Hello'
    },
    74: {
        message: 'World'
    },
};

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    getNote(id): Observable<{message: string}> {
        return of(notes[id]).pipe(
            delay(3000)
        );
    }
}
