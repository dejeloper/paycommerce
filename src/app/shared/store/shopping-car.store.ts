import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Product } from '@shared/models/product.interface';
import { ToastrService } from 'ngx-toastr';

export interface CartStore {
  products: Product[];
  totalAmount: number;
  productsCount: number;
}

const initialState: CartStore = {
  products: [],
  totalAmount: 0,
  productsCount: 0,
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    productsCount: computed(() => calculateProductCount(products())),
    totalAmount: computed(() => calculateTotalAmount(products())),
  })),
  withMethods(({ products, ...store }, toastSvr = inject(ToastrService)) => ({
    addToCart(product: Product) {
      const isProductCart = products().find(
        (item: Product) => item.id === product.id
      );
      if (isProductCart) {
        isProductCart.qty++;
        isProductCart.subTotal = isProductCart.qty * isProductCart.price;
        patchState(store, { products: [...products()] });
      } else {
        if (product.qty === 1) {
          product.subTotal = product.price;
        }
        patchState(store, { products: [...products(), product] });
      }
      toastSvr.success('Producto agregado correctamente', 'PayCommerce');
    },
    deleteToCart(product: Product) {
      const qty = product.qty - 1;
      const subTotal = product.price * qty;

      if (qty <= 0) {
        this.removeProductToCart(product.id);
      } else {
        product.qty = qty;
        product.subTotal = subTotal;

        patchState(store, { products: [...products()] });
      }
      toastSvr.info('Producto eliminado correctamente', 'PayCommerce');
    },
    removeProductToCart(id: number) {
      const deleteProduct = products()
        .filter((product) => product.id === id)
        .map((product) => {
          product.qty = 1;
          product.subTotal = 0;
          return product;
        });

      patchState(store, { products: [...products(), deleteProduct[0]] });

      const updatedProducts = products().filter((product) => product.id !== id);

      patchState(store, { products: updatedProducts });
      toastSvr.info('Productos eliminados correctamente', 'PayCommerce');
    },
    clearCart() {
      patchState(store, initialState);
      toastSvr.info('Productos eliminados correctamente', 'PayCommerce');
    },
  }))
);

function calculateProductCount(products: Product[]): number {
  return products.reduce((acc, product) => acc + product.qty, 0);
}

function calculateTotalAmount(products: Product[]): number {
  return products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
}
