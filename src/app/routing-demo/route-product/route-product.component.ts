import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-product',
  templateUrl: './route-product.component.html',
  styleUrls: ['./route-product.component.scss'],
})
export class RouteProductComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public reload() {
    this.router.navigate(['products'], { relativeTo: this.activatedRoute });
  }
}
