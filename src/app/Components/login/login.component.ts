import { Component, OnInit } from '@angular/core';
import { ClerkService } from '../../Service/clerk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private clerkService: ClerkService, private router: Router) {}

  async ngOnInit() {
    await this.clerkService.initialize();
    if (this.clerkService.isSignedIn()) {
      this.router.navigate(['/jotters']);
      const el = document.getElementById('sign-in') as HTMLDivElement;
      this.clerkService.mountSignIn(el);
    }
  }
}
