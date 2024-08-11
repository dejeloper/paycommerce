import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductServices } from '@api/products.services';
import { Product } from '@shared/models/product.interface';
import { CartStore } from '@shared/store/shopping-car.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styles: '',
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductServices);
  products = this.productSvc.products;
  carStore = inject(CartStore);

  onAddToCart(product: Product): void {
    this.carStore.addToCart(product);
  }
}
