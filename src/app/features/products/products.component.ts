import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductServices } from '@api/products.services';

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
}
