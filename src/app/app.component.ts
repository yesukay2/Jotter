import { Component } from '@angular/core';
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
  constructor(private route: Router) {}
  isLoginRoute() {
    return (
      this.route.url ===
        'https://jotter-8uzth5spy-yesus-projects-e758688f.vercel.app/#/factor-one' ||
      this.route.url ===
        'https://jotter-8uzth5spy-yesus-projects-e758688f.vercel.app/#/factor-two' ||
      this.route.url ===
        'https://jotter-8uzth5spy-yesus-projects-e758688f.vercel.app/#/'
    );
  }
}
