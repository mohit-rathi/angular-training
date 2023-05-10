import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  AsyncValidatorFn,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
})
export class ReactFormComponent implements OnInit, OnDestroy {
  public userForm!: FormGroup;
  public forbiddenPasswords: Array<string> = ['abcd', '1234'];
  public valueSubscription!: Subscription;
  public statusSubscription!: Subscription;

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.userForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.checkForbiddenEmail as AsyncValidatorFn
        ),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
          this.checkForbiddenPasswords.bind(this),
        ]),
      }),
      gender: new FormControl('Male'),
      location: new FormControl('AHM'),
      hobbies: new FormArray([]),
      remember: new FormControl(null),
    });

    // this.valueSubscription = this.userForm.valueChanges.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });

    this.statusSubscription = this.userForm.statusChanges.subscribe({
      next: (status) => {
        console.log(status);
      },
    });
  }

  public onSubmit(): void {
    console.log(this.userForm);
    this.userForm.reset({
      gender: this.userForm.get('gender')?.value,
      location: this.userForm.get('location')?.value,
    });
  }

  public addHobbyControl(): void {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(formControl);
  }

  public getHobbyControls() {
    return (<FormArray>this.userForm.get('hobbies')).controls;
  }

  public checkForbiddenPasswords(
    control: FormControl
  ): { [k: string]: boolean } | null {
    if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
      return { passwordForbidden: true };
    } else {
      return null;
    }
  }

  public checkForbiddenEmail(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@admin.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }

  public onSetValue(): void {
    this.userForm.setValue({
      login: {
        email: 'john@gmail.com',
        password: 'John@123',
      },
      gender: 'Male',
      location: 'AHM',
      hobbies: [],
      remember: false,
    });
  }

  public onPatchValue(): void {
    this.userForm.patchValue({
      gender: 'Female',
      location: 'RKT',
    });
  }

  public onReset(): void {
    this.userForm.reset({
      gender: this.userForm.get('gender')?.value,
      location: this.userForm.get('location')?.value,
    });
  }

  ngOnDestroy(): void {
    // this.valueSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }
}
