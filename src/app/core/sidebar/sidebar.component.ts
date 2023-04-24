import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public sidebarTitle: string = 'Apply Filters';

  public priceRangeList = [
    {
      min: 0,
      max: 99,
    },
    {
      min: 100,
      max: 199,
    },
    {
      min: 200,
      max: 299,
    },
    {
      min: 300,
      max: 399,
    },
    {
      min: 400,
      max: 499,
    },
  ];

  public authorList: string[] = [
    'William Shakespeare',
    'Agatha Christie',
    'Barbara Cartland',
    'Danielle Steel',
    'Harold Robbins',
    'J. K. Rowling',
    'Stephen King',
  ];
}
