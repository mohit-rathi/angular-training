import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-error-one',
  templateUrl: './error-one.component.html',
  styleUrls: ['./error-one.component.scss'],
})
export class ErrorOneComponent {
  constructor(private logger: LoggerService) {}

  public username: string = '';
  public usernameList: Array<string> = ['john', 'bruce', 'peter'];

  public addUser(username: string): void {
    if (username === '') {
      alert('Username can not be empty.');
    } else {
      this.usernameList.push(username);
      this.username = '';
      this.logger.logInfo(username);
    }
  }

  public deleteUser(id: number): void {
    const item = this.usernameList.splice(id, 1)[0];
    this.logger.logInfo(item);
  }
}
