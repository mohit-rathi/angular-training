// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { HeroComponent } from './hero/hero.component';

// services
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [HeroService],
  exports: [HeroComponent],
})
export class HttpDemoModule {}
