import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Products } from './products.model';
import { ProductsActions, ProductsActionTypes } from './products.actions';

export interface State extends EntityState<Products> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Products> = createEntityAdapter<Products>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ProductsActions
): State {
  switch (action.type) {
    case ProductsActionTypes.AddProducts: {
      return adapter.addOne(action.payload.products, state);
    }

    case ProductsActionTypes.UpsertProducts: {
      return adapter.upsertOne(action.payload.products, state);
    }

    case ProductsActionTypes.AddProductss: {
      return adapter.addMany(action.payload.productss, state);
    }

    case ProductsActionTypes.UpsertProductss: {
      return adapter.upsertMany(action.payload.productss, state);
    }

    case ProductsActionTypes.UpdateProducts: {
      return adapter.updateOne(action.payload.products, state);
    }

    case ProductsActionTypes.UpdateProductss: {
      return adapter.updateMany(action.payload.productss, state);
    }

    case ProductsActionTypes.DeleteProducts: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ProductsActionTypes.DeleteProductss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ProductsActionTypes.LoadProductss: {
      return adapter.addAll(action.payload.productss, state);
    }

    case ProductsActionTypes.ClearProductss: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
