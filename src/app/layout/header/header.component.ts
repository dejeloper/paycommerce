import { Component, inject } from '@angular/core';
import { CartLogoComponent } from '../cart-logo/cart-logo.component';
import { LogoComponent } from '../logo/logo.component';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '@shared/store/shopping-car.store';
import { CurrencyPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CartLogoComponent,
    LogoComponent,
    RouterLink,
    CurrencyPipe,
    SlicePipe,
  ],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  isMenuOpen = false;
  cartStore = inject(CartStore);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isMenuOpen = false;
    }
  }
}
