import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): Promise<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1500);
    });
    return promise;
  }
}
