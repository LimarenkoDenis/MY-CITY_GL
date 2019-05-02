import { UsersService } from './../users.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { UserActionTypes, UserActions, LoadUsersSuccess, LoadUsersError } from '../actions/user.actions';


@Injectable()
export class UserEffects {


  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    mergeMap(() => this.usersService.getUsers()
        .pipe(
          // switchMap((users: any[]) => [new LoadUsersSuccess(users), new LoadUsersSuccess2(users)])
          map((users: any[]) => new LoadUsersSuccess(users)),
          catchError((err: any) => of(new LoadUsersError(err)))
        ))
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
  );


  constructor(
    private actions$: Actions<UserActions>,
    private usersService: UsersService
    ) {}

}
