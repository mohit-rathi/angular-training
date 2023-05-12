// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteProductComponent } from './route-product/route-product.component';
import { RouteAccountComponent } from './route-account/route-account.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RouteHomeComponent },
  { path: 'products', component: RouteProductComponent },
  { path: 'account', component: RouteAccountComponent },
  { path: '**', component: RouteNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingDemoRoutingModule {}
