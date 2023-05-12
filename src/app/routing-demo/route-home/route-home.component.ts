import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.scss'],
})
export class RouteHomeComponent {
  constructor(private _router: Router, private _authService: AuthService) {}

  public goToProducts(): void {
    this._router.navigate(['/products']);
  }

  public goToProductDetailsWithQueryParamsAndFragment(): void {
    this._router.navigate(['/products', '100', 'Laptop'], {
      queryParams: {
        isProductDetails: true,
        isAllowedEditing: false,
      },
      fragment: 'loading',
    });
  }

  public onLogin() {
    this._authService.login();
  }
}
