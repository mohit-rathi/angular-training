import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})

export class BookCardComponent {
	@Input() title: string = "";
	@Input() description: string = "";
}
