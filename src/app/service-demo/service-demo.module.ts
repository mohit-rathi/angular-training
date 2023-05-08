// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { ServiceWrapperComponent } from './service-wrapper/service-wrapper.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';

// services
import { UserListService } from './services/user-list.service';
import { UserLoggerService } from './services/user-logger.service';
import { HttpDemoComponent } from './http-demo/http-demo.component';

@NgModule({
  declarations: [
    ServiceWrapperComponent,
    ServiceFormComponent,
    ServiceListComponent,
    HttpDemoComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [UserListService, UserLoggerService],
  exports: [
    ServiceWrapperComponent,
    ServiceFormComponent,
    ServiceListComponent,
  ],
})
export class ServiceDemoModule {}
