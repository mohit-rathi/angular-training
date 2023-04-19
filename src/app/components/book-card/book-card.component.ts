import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';

  displayBookTitle = (title: string) => {
    console.log(title);
  };
}
