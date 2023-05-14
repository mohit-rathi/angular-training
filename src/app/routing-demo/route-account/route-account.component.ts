import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-account',
  templateUrl: './route-account.component.html',
  styleUrls: ['./route-account.component.scss'],
})
export class RouteAccountComponent implements OnInit {
  public accountDetail = {} as {
    id: number;
    owner: string;
    isActive: boolean;
  };
  public isSaved: boolean = false;
  public resolverSubscription!: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.resolverSubscription = this._activatedRoute.data.subscribe({
      next: (data) => {
        this.accountDetail = data['accountDetailResolver'];
      },
    });
  }

  ngOnDestroy(): void {
    this.resolverSubscription.unsubscribe();
  }

  canDeactivate(): boolean {
    if (this.isSaved) {
      return true;
    } else {
      alert('You have unsaved changes.');
      return false;
    }
  }
}
