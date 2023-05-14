import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-not-found',
  templateUrl: './route-not-found.component.html',
  styleUrls: ['./route-not-found.component.scss'],
})
export class RouteNotFoundComponent implements OnInit, OnDestroy {
  public statusCode!: number;
  public statusMessage!: string;
  public dataSubscription!: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataSubscription = this._activatedRoute.data.subscribe({
      next: (data) => {
        this.statusCode = data['statusCode'];
        this.statusMessage = data['statusMessage'];
      },
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
