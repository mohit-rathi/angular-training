// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';
import { CommonErrorModule } from './common-error/common-error.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CommonErrorModule, LifeCycleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
