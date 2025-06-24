import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId?: string;
  constructor() {}

  authenticateUser(userId: string): boolean {
    return !!userId;
  }

  setAuthenticatedUser(userId: string) {
    this.userId = userId;
    return this.userId;
  }

  getUserId() {
    return this.userId;
  }
}
