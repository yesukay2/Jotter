import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jotter';
  menuOpen = false;
  @Output() closeMenu = new EventEmitter<void>();
  constructor(private route: Router) {}
  isLoginRoute(): boolean {
    const loginRoutes = ['/', '/factor-one'];
    return loginRoutes.includes(this.route.url.split('?')[0]);
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : ''; // Prevent scroll
  }

  onClose() {
    this.closeMenu.emit();
  }
}
