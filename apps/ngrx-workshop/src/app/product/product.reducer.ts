import { createReducer, on } from '@ngrx/store';
import { data } from '@ngrx-nx-workshop/data';
import * as productListActions from './product-list/actions';
import { ProductModel } from '../model/product';

export interface GlobalState {
    product: ProductState;
}

interface ProductState {
  products?: ProductModel[];
}
const initState: ProductState = {
  products: undefined
};

export const productsReducer = createReducer(
  initState,
  on(productListActions.productsOpened, state => ({
    ...state,
    products: [...data]
  }))
);

