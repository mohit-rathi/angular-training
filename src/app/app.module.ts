// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { ObservableModule } from './observable/observable.module';
import { CustomDirectiveModule } from './custom-directive/custom-directive.module';
import { TemplateFormModule } from './template-form/template-form.module';
import { ServiceDemoModule } from './service-demo/service-demo.module';

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
    TemplateFormModule,
    ServiceDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
