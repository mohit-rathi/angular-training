// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingDemoRoutingModule } from './routing-demo-routing.module';

// components
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteAccountComponent } from './route-account/route-account.component';
import { RouteProductComponent } from './route-product/route-product.component';
import { RouteDashboardComponent } from './route-dashboard/route-dashboard.component';

@NgModule({
  declarations: [
    RouteHomeComponent,
    RouteAccountComponent,
    RouteProductComponent,
    RouteDashboardComponent,
  ],
  imports: [CommonModule, RoutingDemoRoutingModule],
  exports: [
    RouteHomeComponent,
    RouteAccountComponent,
    RouteProductComponent,
    RouteDashboardComponent,
  ],
})
export class RoutingDemoModule {}
