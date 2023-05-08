import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// services
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss'],
})
export class HttpDemoComponent implements OnDestroy {
  public data: string = '';
  public subscription!: Subscription;

  constructor(private userListService: UserListService) {}

  public onFetch(): void {
    this.subscription = this.userListService.fetchUsersFromAPI().subscribe({
      next: (response) => {
        this.data = response.toString();
      },
      error: (error) => {
        this.data = error.toString();
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
