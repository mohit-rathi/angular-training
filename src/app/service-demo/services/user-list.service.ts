import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {
  private userList: Array<string> = [];

  constructor() {}

  public getUsers(): Array<string> {
    return this.userList;
  }

  public addUser(username: string): void {
    this.userList.push(username);
  }
}
