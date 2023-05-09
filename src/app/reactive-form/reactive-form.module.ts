// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { ReactFormComponent } from './react-form/react-form.component';

@NgModule({
  declarations: [ReactFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactFormComponent],
})
export class ReactiveFormModule {}
