import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public email: string = '';
  public emailRegex: RegExp = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;

  public currentYear: string = new Date().getFullYear().toString();

  public hyperlinkSections = [
    {
      title: 'Title 1',
      hyperlinkList: [
        {
          title: 'link 1',
          href: '#',
        },
        {
          title: 'link 2',
          href: '#',
        },
        {
          title: 'link 3',
          href: '#',
        },
        {
          title: 'link 4',
          href: '#',
        },
      ],
    },
    {
      title: 'Title 2',
      hyperlinkList: [
        {
          title: 'link 5',
          href: '#',
        },
        {
          title: 'link 6',
          href: '#',
        },
        {
          title: 'link 7',
          href: '#',
        },
        {
          title: 'link 8',
          href: '#',
        },
      ],
    },
    {
      title: 'Title 3',
      hyperlinkList: [
        {
          title: 'link 9',
          href: '#',
        },
        {
          title: 'link 10',
          href: '#',
        },
        {
          title: 'link 11',
          href: '#',
        },
        {
          title: 'link 12',
          href: '#',
        },
      ],
    },
    {
      title: 'Title 4',
      hyperlinkList: [
        {
          title: 'link 13',
          href: '#',
        },
        {
          title: 'link 14',
          href: '#',
        },
        {
          title: 'link 15',
          href: '#',
        },
        {
          title: 'link 16',
          href: '#',
        },
      ],
    },
  ];

  public subscribe(): void {
    if (this.email === '') {
      alert('Email is required.');
    } else if (!this.emailRegex.test(this.email)) {
      alert('Please enter a valid email address.');
    } else {
      alert(`Your email ${this.email} has been added to our mailing list.`);
    }
  }
}
