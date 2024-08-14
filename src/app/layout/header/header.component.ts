import { Component, inject, HostListener } from '@angular/core';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartStore } from '@shared/store/shopping-car.store';
import {
  CartLogoComponent,
  LogoComponent,
  PayLogoComponent,
} from 'app/layout/icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CartLogoComponent,
    LogoComponent,
    RouterLink,
    CurrencyPipe,
    SlicePipe,
    PayLogoComponent,
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

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isMenuOpen = false;
    }
  }
}
