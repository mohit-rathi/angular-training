// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteProductComponent } from './route-product/route-product.component';
import { RouteAccountComponent } from './route-account/route-account.component';

const routes: Routes = [
  { path: '', component: RouteHomeComponent },
  { path: 'products', component: RouteProductComponent },
  { path: 'account', component: RouteAccountComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingDemoRoutingModule {}
