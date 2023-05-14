import { Component } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

@Component({
  selector: 'app-route-account',
  templateUrl: './route-account.component.html',
  styleUrls: ['./route-account.component.scss'],
})
export class RouteAccountComponent {
  isSaved: boolean = false;

  canDeactivate(): boolean {
    if (this.isSaved) {
      return true;
    } else {
      alert('You have unsaved changes.');
      return false;
    }
  }
}
