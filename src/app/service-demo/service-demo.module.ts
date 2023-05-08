// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ServiceWrapperComponent } from './service-wrapper/service-wrapper.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';

// services

@NgModule({
  declarations: [
    ServiceWrapperComponent,
    ServiceFormComponent,
    ServiceListComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    ServiceWrapperComponent,
    ServiceFormComponent,
    ServiceListComponent,
  ],
})
export class ServiceDemoModule {}
