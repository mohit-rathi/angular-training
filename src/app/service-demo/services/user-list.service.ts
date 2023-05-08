import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoggerService } from './user-logger.service';
import { Observable } from 'rxjs';

@Injectable()
export class UserListService {
  private userList: Array<string> = [];

  constructor(
    private userLogger: UserLoggerService,
    private http: HttpClient
  ) {}

  public getUsers(): Array<string> {
    this.userLogger.getUserLog(this.userList);
    return this.userList;
  }

  public addUser(username: string): void {
    this.userList.push(username);
    this.userLogger.addUserLog(username);
  }

  public fetchUsersFromAPI(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
