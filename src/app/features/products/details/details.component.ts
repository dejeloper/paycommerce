import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProductServices } from '@api/products.services';
import { Product } from '@shared/models/product.interface';
import { CartStore } from '@shared/store/shopping-car.store';
import { StarEmptyComponent } from 'app/layout/stars/star-empty/star-empty';
import { StarHalfFilledComponent } from 'app/layout/stars/star-half-filled/star-half-filled';
import { StarFilledComponent } from 'app/layout/stars/start-filled/star-filled';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    StarFilledComponent,
    StarHalfFilledComponent,
    StarEmptyComponent,
  ],
  templateUrl: './details.component.html',
  styles: '',
})
export default class DetailsComponent implements OnInit {
  starArray: number[] = new Array(5).fill(0);
  // @Input({ alias: 'id' }) productId!: number;
  productId = input<number>(0, { alias: 'id' });
  product!: Signal<Product | undefined>;
  cartStore = inject(CartStore);

  private readonly productSvc = inject(ProductServices);
  private readonly _sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.product = this.productSvc.getProductById(this.productId());
  }

  onAddToCard(): void {
    this.cartStore.addToCart(this.product()!);
  }

  generateSVG(index: number): SafeHtml {
    let svgContent = null;
    const rate = this.product()?.rating.rate as number;

    if (index + 1 <= Math.floor(rate)) {
      svgContent =
        '<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M30.86 12.54c-.17-.5-.64-.86-1.19-.86h-9.54L17.2 2.61a1.3 1.3 0 0 0-2.37 0l-2.95 9.07H2.33a1.25 1.25 0 0 0-.73 2.26l7.71 5.6-2.94 9.07a1.25 1.25 0 0 0 1.93 1.4h-.01l7.71-5.6 7.72 5.6a1.25 1.25 0 0 0 1.92-1.4l-2.95-9.06 7.72-5.6a1.25 1.25 0 0 0 .45-1.41z"/></svg>';
    } else if (index < rate) {
      svgContent =
        '<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M30.86 12.54c-.17-.5-.64-.86-1.19-.86h-9.54L17.2 2.61a1.25 1.25 0 0 0-1.59-.8h.01c-.37.13-.66.43-.77.8v.01h-.03l-2.94 9.06H2.33a1.25 1.25 0 0 0-.74 2.26l7.72 5.6-2.95 9.07a1.25 1.25 0 0 0 1.93 1.4l7.71-5.6 7.72 5.6a1.25 1.25 0 0 0 1.92-1.4l-2.95-9.06 7.72-5.6a1.25 1.25 0 0 0 .45-1.41zm-10.37 5.52a1.25 1.25 0 0 0-.46 1.4l2.04 6.27-5.34-3.88c-.19-.14-.43-.22-.69-.22H16V7.06l2.04 6.27c.17.5.63.86 1.19.86h6.6z"/></svg>';
    } else
      svgContent =
        '<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M30.86 12.54c-.17-.5-.64-.86-1.19-.86h-9.54L17.2 2.61a1.3 1.3 0 0 0-2.37 0l-2.95 9.07H2.33a1.25 1.25 0 0 0-.73 2.26l7.71 5.6-2.94 9.07a1.25 1.25 0 0 0 1.93 1.4h-.01l7.71-5.6 7.72 5.6a1.25 1.25 0 0 0 1.92-1.4l-2.95-9.06 7.72-5.6a1.25 1.25 0 0 0 .45-1.41zm-10.37 5.52a1.25 1.25 0 0 0-.46 1.4l2.04 6.27-5.34-3.88a1.24 1.24 0 0 0-1.47 0l-5.33 3.88 2.04-6.27a1.25 1.25 0 0 0-.45-1.4l-5.34-3.88h6.6c.55 0 1.01-.36 1.18-.85v-.01L16 7.05l2.04 6.27c.17.5.63.86 1.19.86h6.6z"/></svg>';

    return this._sanitizer.bypassSecurityTrustHtml(svgContent);
  }
}
