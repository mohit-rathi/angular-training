import { Injectable } from '@angular/core';
import { UserLoggerService } from './user-logger.service';

@Injectable()
export class UserListService {
  private userList: Array<string> = [];

  constructor(private userLogger: UserLoggerService) {}

  public getUsers(): Array<string> {
    this.userLogger.getUserLog(this.userList);
    return this.userList;
  }

  public addUser(username: string): void {
    this.userList.push(username);
    this.userLogger.addUserLog(username);
  }
}
