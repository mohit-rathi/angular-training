// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { ServiceWrapperComponent } from './service-wrapper/service-wrapper.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';

// services
import { UserListService } from './services/user-list.service';

@NgModule({
  declarations: [
    ServiceWrapperComponent,
    ServiceFormComponent,
    ServiceListComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [UserListService],
  exports: [
    ServiceWrapperComponent,
    ServiceFormComponent,
    ServiceListComponent,
  ],
})
export class ServiceDemoModule {}
