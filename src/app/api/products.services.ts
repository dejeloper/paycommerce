import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  inject,
  Injectable,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { environment } from '@envs/environment.development';
import { Product } from '@shared/models/product.interface';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ProductServices {
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    this.getProducts();
  }

  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) => ({
            ...product,
            qty: 1,
            subTotal: 0,
          }))
        ),
        tap((products: Product[]) => this.products.set(products))
      )
      .subscribe();
  }

  public getProductById(id: number) {
    const product$ = this._http.get<Product>(
      `${this._endPoint}/products/${id}`
    );

    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(product$)
    );
    // return this._http.get<Product>(`${this._endPoint}/products/${id}`);
  }
}
