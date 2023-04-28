// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { ObservableModule } from './observable/observable.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    LifeCycleModule,
    ObservableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
