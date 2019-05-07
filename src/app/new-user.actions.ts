import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { NewUser } from './new-user.model';

export enum NewUserActionTypes {
  LoadNewUsers = '[NewUser] Load NewUsers',
  AddNewUser = '[NewUser] Add NewUser',
  UpsertNewUser = '[NewUser] Upsert NewUser',
  AddNewUsers = '[NewUser] Add NewUsers',
  UpsertNewUsers = '[NewUser] Upsert NewUsers',
  UpdateNewUser = '[NewUser] Update NewUser',
  UpdateNewUsers = '[NewUser] Update NewUsers',
  DeleteNewUser = '[NewUser] Delete NewUser',
  DeleteNewUsers = '[NewUser] Delete NewUsers',
  ClearNewUsers = '[NewUser] Clear NewUsers'
}

export class LoadNewUsers implements Action {
  readonly type = NewUserActionTypes.LoadNewUsers;

  constructor(public payload: { newUsers: NewUser[] }) {}
}

export class AddNewUser implements Action {
  readonly type = NewUserActionTypes.AddNewUser;

  constructor(public payload: { newUser: NewUser }) {}
}

export class UpsertNewUser implements Action {
  readonly type = NewUserActionTypes.UpsertNewUser;

  constructor(public payload: { newUser: NewUser }) {}
}

export class AddNewUsers implements Action {
  readonly type = NewUserActionTypes.AddNewUsers;

  constructor(public payload: { newUsers: NewUser[] }) {}
}

export class UpsertNewUsers implements Action {
  readonly type = NewUserActionTypes.UpsertNewUsers;

  constructor(public payload: { newUsers: NewUser[] }) {}
}

export class UpdateNewUser implements Action {
  readonly type = NewUserActionTypes.UpdateNewUser;

  constructor(public payload: { newUser: Update<NewUser> }) {}
}

export class UpdateNewUsers implements Action {
  readonly type = NewUserActionTypes.UpdateNewUsers;

  constructor(public payload: { newUsers: Update<NewUser>[] }) {}
}

export class DeleteNewUser implements Action {
  readonly type = NewUserActionTypes.DeleteNewUser;

  constructor(public payload: { id: string }) {}
}

export class DeleteNewUsers implements Action {
  readonly type = NewUserActionTypes.DeleteNewUsers;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearNewUsers implements Action {
  readonly type = NewUserActionTypes.ClearNewUsers;
}

export type NewUserActions =
 LoadNewUsers
 | AddNewUser
 | UpsertNewUser
 | AddNewUsers
 | UpsertNewUsers
 | UpdateNewUser
 | UpdateNewUsers
 | DeleteNewUser
 | DeleteNewUsers
 | ClearNewUsers;
