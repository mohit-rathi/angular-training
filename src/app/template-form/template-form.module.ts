// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TempFormComponent } from './temp-form/temp-form.component';

@NgModule({
  declarations: [TempFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [TempFormComponent],
})
export class TemplateFormModule {}
