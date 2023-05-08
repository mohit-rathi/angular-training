import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.scss'],
})
export class RouteHomeComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public goToProducts(): void {
    this.router.navigate(['/products']);
  }
}
