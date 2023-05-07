import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss'],
})
export class TempFormComponent {
  @ViewChild('tempForm') form!: NgForm;

  public city: string = 'AHM';

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
