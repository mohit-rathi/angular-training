import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss'],
})
export class TempFormComponent {
  @ViewChild('tempForm') tempForm!: NgForm;

  public city: string = 'AHM';
  public genders: Array<string> = ['Male', 'Female'];

  public onSubmit(): void {
    console.log(this.tempForm.value);
  }

  public onSetValue(): void {
    this.tempForm.form.setValue({
      fname: 'John',
      lname: 'Doe',
      email: 'johndoe@gmail.com',
      password: 'John@123',
      gender: 'Male',
      location: 'RKT',
      remember: true,
    });
  }

  public onPatchValue(): void {
    this.tempForm.form.patchValue({
      fname: 'Peter',
      lname: 'Parker',
    });
  }
}
