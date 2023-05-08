import { Component, OnInit } from '@angular/core';

// services
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {
  public userList: Array<string> = [];

  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.userList = this.userListService.getUsers();
  }
}
