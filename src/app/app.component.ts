import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import SpinnerComponent from './layout/stars/components/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {}
