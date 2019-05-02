import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersError = '[User] Load Users Error',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  public constructor(public payload: any) {}
}

export class LoadUsersError implements Action {
  readonly type = UserActionTypes.LoadUsersError;
  public constructor(public payload: any) {}
}

export type UserActions =
  LoadUsers|
  LoadUsersSuccess|
  LoadUsersError;
