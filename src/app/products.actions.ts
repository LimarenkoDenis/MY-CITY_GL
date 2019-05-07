import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Products } from './products.model';

export enum ProductsActionTypes {
  LoadProductss = '[Products] Load Productss',
  AddProducts = '[Products] Add Products',
  UpsertProducts = '[Products] Upsert Products',
  AddProductss = '[Products] Add Productss',
  UpsertProductss = '[Products] Upsert Productss',
  UpdateProducts = '[Products] Update Products',
  UpdateProductss = '[Products] Update Productss',
  DeleteProducts = '[Products] Delete Products',
  DeleteProductss = '[Products] Delete Productss',
  ClearProductss = '[Products] Clear Productss'
}

export class LoadProductss implements Action {
  readonly type = ProductsActionTypes.LoadProductss;

  constructor(public payload: { productss: Products[] }) {}
}

export class AddProducts implements Action {
  readonly type = ProductsActionTypes.AddProducts;

  constructor(public payload: { products: Products }) {}
}

export class UpsertProducts implements Action {
  readonly type = ProductsActionTypes.UpsertProducts;

  constructor(public payload: { products: Products }) {}
}

export class AddProductss implements Action {
  readonly type = ProductsActionTypes.AddProductss;

  constructor(public payload: { productss: Products[] }) {}
}

export class UpsertProductss implements Action {
  readonly type = ProductsActionTypes.UpsertProductss;

  constructor(public payload: { productss: Products[] }) {}
}

export class UpdateProducts implements Action {
  readonly type = ProductsActionTypes.UpdateProducts;

  constructor(public payload: { products: Update<Products> }) {}
}

export class UpdateProductss implements Action {
  readonly type = ProductsActionTypes.UpdateProductss;

  constructor(public payload: { productss: Update<Products>[] }) {}
}

export class DeleteProducts implements Action {
  readonly type = ProductsActionTypes.DeleteProducts;

  constructor(public payload: { id: string }) {}
}

export class DeleteProductss implements Action {
  readonly type = ProductsActionTypes.DeleteProductss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearProductss implements Action {
  readonly type = ProductsActionTypes.ClearProductss;
}

export type ProductsActions =
 LoadProductss
 | AddProducts
 | UpsertProducts
 | AddProductss
 | UpsertProductss
 | UpdateProducts
 | UpdateProductss
 | DeleteProducts
 | DeleteProductss
 | ClearProductss;
