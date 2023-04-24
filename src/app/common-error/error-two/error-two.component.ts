import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error-two',
  templateUrl: './error-two.component.html',
  styleUrls: ['./error-two.component.scss'],
})
export class ErrorTwoComponent {
  @Output() public addUsernameEvent = new EventEmitter<string>();

  public username: string = '';

  public addUser(username: string): void {
    if (username === '') {
      alert('Username can not be empty.');
    } else {
      this.addUsernameEvent.emit(username);
      this.username = '';
    }
  }
}
