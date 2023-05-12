import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productId!: number;
  public productName!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.productName = this.activatedRoute.snapshot.params['productName'];

    this.activatedRoute.params.subscribe({
      next: (parameters: Params) => {
        console.log(parameters);
        this.productId = parseInt(parameters['id']);
        this.productName = parameters['productName'];
      },
    });
  }
}
