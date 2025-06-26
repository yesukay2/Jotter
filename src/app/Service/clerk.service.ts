import { Injectable } from '@angular/core';
import { Clerk } from '@clerk/clerk-js';
import { environments } from '../../Environments/environment.prod';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ClerkService {
  public clerk: Clerk;
  public loaded = false;

  constructor(private authService: AuthService) {
    this.clerk = new Clerk(environments.CLERK_PUBLISHABLE_KEY);
  }

  async initialize(): Promise<void> {
    if (this.loaded) return;

    await this.clerk.load();

    if (this.clerk.user) {
      this.authService.setAuthenticatedUser(this.clerk.user.id);
    }

    this.loaded = true;
  }

  mountUserProfile(targetElement: HTMLElement) {
    if (window.Clerk && targetElement) {
      window.Clerk.mountUserButton(targetElement as HTMLDivElement);
    } else {
      console.error('Clerk not ready or target element invalid');
    }
  }

  mountSignIn(el: HTMLDivElement) {
    this.clerk.mountSignIn(el);
  }

  isSignedIn(): boolean {
    return !!this.clerk.user;
  }

  getUserId(): string | null {
    return this.clerk.user?.id || null;
  }
}
