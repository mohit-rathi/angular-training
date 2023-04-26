import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public sidebarTitle: string = 'Filter';

  // public priceRangeList = [
  //   {
  //     min: 1,
  //     max: 100,
  //   },
  //   {
  //     min: 101,
  //     max: 200,
  //   },
  //   {
  //     min: 201,
  //     max: 300,
  //   },
  //   {
  //     min: 301,
  //     max: 400,
  //   },
  //   {
  //     min: 401,
  //     max: 500,
  //   },
  // ];

  public authorList: string[] = [
    'William Shakespeare',
    'Agatha Christie',
    'Barbara Cartland',
    'Danielle Steel',
    'J. K. Rowling',
    'Stephen King',
  ];
}
