// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [HeroComponent],
})
export class HttpDemoModule {}
