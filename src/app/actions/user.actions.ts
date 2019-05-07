import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersError = '[User] Load Users Error',

  AddUser = '[User] Add User',
  RemoveUser = '[User] Remove user',
  UpdateUser = '[User] update user',
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


export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;
  public constructor(public payload: any) {}
}

export class RemoveUser implements Action {
  readonly type = UserActionTypes.RemoveUser;
  public constructor(public payload: number) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  public constructor(public payload: {id: number, userToUpdate: { name: number }}) {}
}


export type UserActions =
  LoadUsers|
  LoadUsersSuccess|
  LoadUsersError |
  AddUser |
  RemoveUser|
  UpdateUser;
