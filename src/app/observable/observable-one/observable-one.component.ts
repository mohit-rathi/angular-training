import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-one',
  templateUrl: './observable-one.component.html',
  styleUrls: ['./observable-one.component.scss'],
})
export class ObservableOneComponent implements OnInit, OnDestroy {
  public obs!: Observable<number>;
  public sub!: Subscription;
  public observerError: string = '';
  public observerComplete: string = '';
  public numbers: Array<number> = [];

  ngOnInit(): void {
    // create a custom observable
    this.obs = new Observable((observer) => {
      let count = 1;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('ERROR: Count is greater than 5!'));
        }
        count++;
      }, 1000);
    });

    // subscribe to the observable
    this.sub = this.obs.subscribe({
      next: (data: number) => {
        this.numbers.push(data);
      },
      error: (error) => {
        this.observerError = error.message;
      },
      complete: () => {
        this.observerComplete = 'SUCCESS: Observer completed!';
      },
    });
  }

  ngOnDestroy(): void {
    // unsubscribe on destroy
    this.sub.unsubscribe();
  }
}
