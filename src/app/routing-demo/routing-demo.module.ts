// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteAccountComponent } from './route-account/route-account.component';
import { RouteProductComponent } from './route-product/route-product.component';
import { RouteDashboardComponent } from './route-dashboard/route-dashboard.component';

const routes: Routes = [
  { path: '', component: RouteHomeComponent },
  { path: 'products', component: RouteProductComponent },
  { path: 'account', component: RouteAccountComponent },
];

@NgModule({
  declarations: [
    RouteHomeComponent,
    RouteAccountComponent,
    RouteProductComponent,
    RouteDashboardComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [
    RouteHomeComponent,
    RouteAccountComponent,
    RouteProductComponent,
    RouteDashboardComponent,
  ],
})
export class RoutingDemoModule {}
