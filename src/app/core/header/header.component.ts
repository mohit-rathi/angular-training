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
      href: '#',
      isActive: true,
    },
    {
      title: "Today's Deal",
      href: '#',
      isActive: false,
    },
    {
      title: 'Mobile',
      href: '#',
      isActive: false,
    },
    {
      title: 'Eloctronics',
      href: '#',
      isActive: false,
    },
    {
      title: 'Customer Service',
      href: '#',
      isActive: false,
    },
    {
      title: 'About',
      href: '#',
      isActive: false,
    },
  ];
}
