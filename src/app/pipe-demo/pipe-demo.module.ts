// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PipeTestComponent } from './pipe-test/pipe-test.component';

// pipes
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { SnakeCasePipe } from './pipes/snake-case.pipe';

@NgModule({
  declarations: [PipeTestComponent, MultiplierPipe, SnakeCasePipe],
  imports: [CommonModule],
  exports: [PipeTestComponent],
})
export class PipeDemoModule {}
