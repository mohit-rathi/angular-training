// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { ErrorOneComponent } from './error-one/error-one.component';
import { ErrorTwoComponent } from './error-two/error-two.component';
import { ErrorThreeComponent } from './error-three/error-three.component';

@NgModule({
  declarations: [ErrorOneComponent, ErrorTwoComponent, ErrorThreeComponent],
  imports: [CommonModule, FormsModule],
  exports: [ErrorOneComponent, ErrorTwoComponent, ErrorThreeComponent],
})
export class CommonErrorModule {}
