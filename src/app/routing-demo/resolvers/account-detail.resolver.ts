import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

export interface IAccount {
  id: number;
  owner: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AccountDetailResolver implements Resolve<IAccount> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IAccount> {
    const accountDetail: IAccount = {
      id: 123,
      owner: 'John Doe',
      isActive: true,
    };
    return of(accountDetail);
  }
}
