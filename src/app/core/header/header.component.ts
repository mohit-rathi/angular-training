import { Component } from '@angular/core';
import { INavLink } from '../interfaces/nav-link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public navbarTitle: string = 'Book Shop';
  public hyperlinkList: INavLink[] = [
    {
      title: 'Dashboard',
      href: 'https://www.google.com',
      isActive: true,
    },
    {
      title: "Today's Deal",
      href: 'https://www.google.com',
      isActive: false,
    },
    {
      title: 'Mobile',
      href: 'https://www.google.com',
      isActive: false,
    },
    {
      title: 'Eloctronics',
      href: 'https://www.google.com',
      isActive: false,
    },
    {
      title: 'Customer Service',
      href: 'https://www.google.com',
      isActive: false,
    },
    {
      title: 'About',
      href: 'https://www.google.com',
      isActive: false,
    },
  ];
}
