import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email: string = '';
  emailRegex = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;

  subscribe = () => {
    if (this.email === '') {
      alert('Email is required.');
    } else if (!this.emailRegex.test(this.email)) {
      alert('Please enter a valid email address.');
    } else {
      alert(`Your email ${this.email} has been added to our mailing list.`);
    }
  };
}
