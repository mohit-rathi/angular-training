import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-three',
  templateUrl: './error-three.component.html',
  styleUrls: ['./error-three.component.scss'],
})
export class ErrorThreeComponent {
  @Input('user') public user!: { id: number; username: string };

  @Output() public deleteUsernameEvent = new EventEmitter<number>();

  public deleteUsername(id: number): void {
    this.deleteUsernameEvent.emit(id);
  }
}
