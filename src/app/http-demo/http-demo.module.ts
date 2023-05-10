// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule],
  exports: [HeroComponent],
})
export class HttpDemoModule {}
