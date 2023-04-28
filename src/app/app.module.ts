// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { ObservableModule } from './observable/observable.module';
import { CustomDirectiveModule } from './custom-directive/custom-directive.module';

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
    CustomDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
