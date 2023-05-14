// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { RouteHomeComponent } from './route-home/route-home.component';
import { RouteProductComponent } from './route-product/route-product.component';
import { RouteAccountComponent } from './route-account/route-account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';

// guards
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { SaveGuard } from './guards/save.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RouteHomeComponent },
  {
    path: 'products',
    component: RouteProductComponent,
    canActivate: [AuthGuard],
    canActivateChild: [RoleGuard],
    children: [
      { path: ':id/:productName', component: ProductDetailsComponent },
    ],
  },
  {
    path: 'account',
    component: RouteAccountComponent,
    canDeactivate: [SaveGuard],
  },
  {
    path: '**',
    component: RouteNotFoundComponent,
    data: { statusCode: 404, statusMessage: 'Route Not Found' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingDemoRoutingModule {}
