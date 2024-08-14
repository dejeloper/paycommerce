import { Component, inject } from '@angular/core';
import { CartStore } from '@shared/store/shopping-car.store';
import { CheckoutService } from './services/checkout.services';
import {
  DeleteLogoComponent,
  MinusLogoComponent,
  PayLogoComponent,
  PlusLogoComponent,
} from 'app/layout/icons';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    PayLogoComponent,
    DeleteLogoComponent,
    PlusLogoComponent,
    MinusLogoComponent,
    CurrencyPipe,
    SlicePipe,
  ],
  templateUrl: './checkout.component.html',
  styles: [],
})
export default class CheckoutComponent {
  cartStore = inject(CartStore);

  private readonly _checkoutSvc = inject(CheckoutService);

  onProceedToPay(): void {
    this._checkoutSvc.onProceedToPay(this.cartStore.products());
  }

  addToCart(product: Product): void {
    this.cartStore.addToCart(product);
  }

  deleteToCart(product: Product): void {
    this.cartStore.deleteToCart(product);
  }

  removeProduct(id: number): void {
    this.cartStore.removeProductToCart(id);
  }

  clearAll(): void {
    this.cartStore.clearCart();
  }
}
