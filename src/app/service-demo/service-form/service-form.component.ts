import { Component } from '@angular/core';

// services
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent {
  public username: string = '';

  constructor(private userListService: UserListService) {}

  public onUserCreate(): void {
    if (this.username === '') {
      alert('Name can not be empty!');
    } else {
      this.userListService.addUser(this.username);
      this.username = '';
    }
  }
}
