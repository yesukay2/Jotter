import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected userId?: string;
  constructor(private authService: AuthService) {
    this.userId = this.authService.getUserId();
  }
}
