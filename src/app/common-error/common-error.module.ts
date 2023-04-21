// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { ErrorOneComponent } from './error-one/error-one.component';
import { ErrorTwoComponent } from './error-two/error-two.component';
import { ErrorThreeComponent } from './error-three/error-three.component';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [ErrorOneComponent, ErrorTwoComponent, ErrorThreeComponent],
  imports: [CommonModule, FormsModule],
  exports: [ErrorOneComponent, ErrorTwoComponent, ErrorThreeComponent],
  providers: [LoggerService],
})
export class CommonErrorModule {}
