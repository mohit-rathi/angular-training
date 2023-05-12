import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// services
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivateChild {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authService.isAuthorized().then((isAdmin: boolean) => {
      if (!isAdmin) {
        this._router.navigate(['/']);
        setTimeout(() => {
          alert('You are not an Admin.');
        }, 500);
      }
      return isAdmin;
    });
  }
}
