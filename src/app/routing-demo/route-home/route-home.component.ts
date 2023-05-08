import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.scss'],
})
export class RouteHomeComponent {
  constructor(private router: Router) {}

  public goToProducts(): void {
    this.router.navigate(['/products']);
  }
}
