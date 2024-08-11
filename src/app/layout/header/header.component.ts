import { Component } from '@angular/core';
import { CartLogoComponent } from '../cart-logo/cart-logo.component';
import { LogoComponent } from '../logo/logo.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartLogoComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;

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
