import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss'],
})
export class TempFormComponent {
  public onSubmit(form: NgForm): void {
    console.log(form);
  }
}
