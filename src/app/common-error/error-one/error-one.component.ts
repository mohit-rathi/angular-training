import { Component } from '@angular/core';

@Component({
  selector: 'app-error-one',
  templateUrl: './error-one.component.html',
  styleUrls: ['./error-one.component.scss'],
})
export class ErrorOneComponent {
  public username: string = '';
  public usernameList: Array<string> = ['john', 'bruce', 'peter'];

  public addUser(username: string): void {
    if (username === '') {
      alert('Username can not be empty.');
    } else {
      this.usernameList.push(username);
      this.username = '';
    }
  }

  public deleteUser(id: number): void {
    this.usernameList.splice(id, 1);
  }
}
