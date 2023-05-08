import { Injectable } from '@angular/core';

@Injectable()
export class UserLoggerService {
  public addUserLog(username: string): void {
    console.log(`Created new user: ${username}`);
  }

  public getUserLog(userList: Array<string>): void {
    console.log('Get all users:');
    userList.forEach((user) => {
      console.log(user);
    });
  }
}
