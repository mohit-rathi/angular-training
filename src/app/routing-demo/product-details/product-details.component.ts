import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public productId!: number;
  public productName!: string;
  public paramsSubscription!: Subscription;
  public queryParamsSubscription!: Subscription;
  public fragmentSubscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.productName = this.activatedRoute.snapshot.params['productName'];

    this.paramsSubscription = this.activatedRoute.params.subscribe({
      next: (parameters: Params) => {
        console.log(parameters);
        this.productId = parseInt(parameters['id']);
        this.productName = parameters['productName'];
      },
    });

    // console.log('Query Params: ', this.activatedRoute.snapshot.queryParams);
    // console.log('Fragment: ', this.activatedRoute.snapshot.fragment);

    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe({
      next: (queryParams) => {
        console.log('Query Params: ', queryParams);
      },
    });

    this.fragmentSubscription = this.activatedRoute.fragment.subscribe({
      next: (fragment) => {
        console.log('Fragment: ', fragment);
      },
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }
}
