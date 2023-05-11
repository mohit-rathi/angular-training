// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeTestComponent } from './pipe-test/pipe-test.component';

// components

@NgModule({
  declarations: [PipeTestComponent],
  imports: [CommonModule],
  exports: [PipeTestComponent],
})
export class PipeDemoModule {}
