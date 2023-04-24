import { Component } from '@angular/core';

// services
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-error-one',
  templateUrl: './error-one.component.html',
  styleUrls: ['./error-one.component.scss'],
})
export class ErrorOneComponent {
  public usernameList: Array<string> = ['john', 'bruce', 'peter'];

  constructor(private logger: LoggerService) {}

  public addUsername(username: string): void {
    this.usernameList.push(username);
    this.logger.logInfo(username);
  }

  public deleteUsername(id: number): void {
    const username = this.usernameList.splice(id, 1)[0];
    this.logger.logInfo(username);
  }
}
