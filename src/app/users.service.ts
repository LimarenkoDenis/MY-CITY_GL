import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers() {

    console.log('service');

    return of([
      { id: 1, name: 'Ann', age: 22, isActive: false },
      { id: 2, name: 'Dan', age: 29, isActive: false },
      { id: 3, name: 'Dima', age: 12, isActive: true },
      { id: 4, name: 'Egor', age: 6, isActive: true },
      { id: 5, name: 'Andrew', age: 90, isActive: false },
      { id: 6, name: 'Igor', age: 10, isActive: false },
    ]).pipe(
      delay(3000)
    );
  }
}
