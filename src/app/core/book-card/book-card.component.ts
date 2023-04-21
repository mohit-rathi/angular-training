import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input()
  public book: any;

  public displayBookTitle(title: string): void {
    console.log(title);
  }
}
