import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// services
import { AuthService } from '../services/auth.service';

// components
import { RouteAccountComponent } from '../route-account/route-account.component';

@Injectable({
  providedIn: 'root',
})
export class SaveGuard implements CanDeactivate<unknown> {
  constructor(private _authService: AuthService) {}

  canDeactivate(
    component: RouteAccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canDeactivate();
  }
}
