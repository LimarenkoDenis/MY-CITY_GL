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

    return of([ {name: 'myName' }]).pipe(
      delay(3000)
    );
  }
}
