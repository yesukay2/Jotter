import { Component, OnInit } from '@angular/core';
import { Clerk } from '@clerk/clerk-js';
import { AuthService } from '../../Service/auth.service';
import { environments } from '../../../Environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  clerk!: Clerk;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.clerk = new Clerk(environments.CLERK_PUBLISHABLE_KEY);
    this.clerk.load().then(() => {
      if (this.clerk.user) {
        this.router.navigate(['/jotters']);
        this.authService.setAuthenticatedUser(this.clerk.user.id);
      } else {
        const loginSection = document.querySelector('.login');
        loginSection!.innerHTML = `<div id='sign-in'></div>`;
        const el = document.querySelector('#sign-in') as HTMLDivElement;
        this.router.navigate(['/']);
        this.clerk.mountSignIn(el);
      }
    });
  }
}
