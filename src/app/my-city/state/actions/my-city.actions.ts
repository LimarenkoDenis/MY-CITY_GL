import { Action } from '@ngrx/store';

export enum MyCityActionTypes {
  LoadMyCitys = '[MyCity] Load MyCitys',
  
  
}

export class LoadMyCitys implements Action {
  readonly type = MyCityActionTypes.LoadMyCitys;
}


export type MyCityActions = LoadMyCitys;
