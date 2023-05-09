import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
})
export class ReactFormComponent implements OnInit {
  public userForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.userForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      gender: new FormControl('Male'),
      location: new FormControl('AHM'),
      remember: new FormControl(null),
    });
  }

  public onSubmit(): void {
    console.log(this.userForm);
  }
}
