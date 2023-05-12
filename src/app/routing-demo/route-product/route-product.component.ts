import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-route-product',
  templateUrl: './route-product.component.html',
  styleUrls: ['./route-product.component.scss'],
})
export class RouteProductComponent {
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService
  ) {}

  public reload() {
    this._router.navigate(['products'], { relativeTo: this._activatedRoute });
  }

  public onLogout() {
    this._authService.logout();
  }
}
