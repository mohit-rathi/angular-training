import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public sidebarTitle: string = 'Sidebar';
  public sidebarContent: string = 'Lorem ipsum dolor sit amet.';
}
