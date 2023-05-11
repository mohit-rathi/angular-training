// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { SnakeCasePipe } from './pipes/snake-case.pipe';

// components

@NgModule({
  declarations: [PipeTestComponent, MultiplierPipe, SnakeCasePipe],
  imports: [CommonModule],
  exports: [PipeTestComponent],
})
export class PipeDemoModule {}
