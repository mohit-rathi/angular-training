import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;

  public login(): void {
    this.isLoggedIn = true;
  }

  public logout(): void {
    this.isLoggedIn = false;
  }

  public isAuthenticated(): Promise<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1500);
    });
    return promise;
  }

  public setAdmin(): void {
    this.isAdmin = true;
  }

  public removeAdmin(): void {
    this.isAdmin = false;
  }

  public isAuthorized(): Promise<any> {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAdmin);
      }, 1500);
    });
    return promise;
  }
}
