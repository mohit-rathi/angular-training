import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-one',
  templateUrl: './observable-one.component.html',
  styleUrls: ['./observable-one.component.scss'],
})
export class ObservableOneComponent implements OnInit, OnDestroy {
  public sub!: Subscription;
  public observerError: string = '';
  public numbers: Array<unknown> = [];

  ngOnInit(): void {
    // create a custom observable
    const customObservable = new Observable((observer) => {
      let count = 1;
      setInterval(() => {
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    // subscribe to the observable
    this.sub = customObservable.subscribe(
      (data) => {
        this.numbers.push(data);
      },
      (error) => {
        this.observerError = error.message;
      }
    );
  }

  ngOnDestroy(): void {
    // unsubscribe on destroy
    this.sub.unsubscribe();
  }
}
