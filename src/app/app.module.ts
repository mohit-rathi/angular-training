// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { ObservableModule } from './observable/observable.module';
import { CustomDirectiveModule } from './custom-directive/custom-directive.module';
import { ServiceDemoModule } from './service-demo/service-demo.module';
import { RoutingDemoModule } from './routing-demo/routing-demo.module';
import { TemplateFormModule } from './template-form/template-form.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { HttpDemoModule } from './http-demo/http-demo.module';

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
    ServiceDemoModule,
    RoutingDemoModule,
    TemplateFormModule,
    ReactiveFormModule,
    HttpDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
