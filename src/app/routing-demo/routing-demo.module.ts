// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingDemoRoutingModule } from './routing-demo-routing.module';

// components
import { RouteDashboardComponent } from './route-dashboard/route-dashboard.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteProductComponent } from './route-product/route-product.component';
import { RouteAccountComponent } from './route-account/route-account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';

// services
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    RouteDashboardComponent,
    RouteHomeComponent,
    RouteProductComponent,
    RouteAccountComponent,
    ProductDetailsComponent,
    RouteNotFoundComponent,
  ],
  imports: [CommonModule, RoutingDemoRoutingModule],
  providers: [AuthService],
  exports: [
    RouteDashboardComponent,
    RouteHomeComponent,
    RouteProductComponent,
    RouteAccountComponent,
    ProductDetailsComponent,
    RouteNotFoundComponent,
  ],
})
export class RoutingDemoModule {}
