import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss'],
})
export class TempFormComponent {
  @ViewChild('tempForm') tempForm!: NgForm;

  public user = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    gender: '',
    location: '',
    remember: false,
  };
  public isSubmitted: boolean = false;

  public city: string = 'AHM';
  public genders: Array<string> = ['Male', 'Female'];

  public onSubmit(): void {
    console.log(this.tempForm.value);
    this.user.fname = this.tempForm.value.fname;
    this.user.lname = this.tempForm.value.lname;
    this.user.email = this.tempForm.value.email;
    this.user.password = this.tempForm.value.password;
    this.user.gender = this.tempForm.value.gender;
    this.user.location = this.tempForm.value.location;
    this.user.remember = this.tempForm.value.remember;
    this.isSubmitted = true;
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
      email: 'peter@gmail.com',
    });
  }
}
