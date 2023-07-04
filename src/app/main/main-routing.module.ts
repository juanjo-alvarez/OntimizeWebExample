import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, PermissionsGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [PermissionsGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { oPermission: { permissionId: 'home'}}},
      { path: 'homeadmin', loadChildren: () => import('./homeadmin/homeadmin.module').then(m => m.HomeNewModule), data: { oPermission: { permissionId: 'homeadmin', restrictedPermissionsRedirect: '/main/home'}}},
      { path: 'homeuser', loadChildren: () => import('./homeadmin/homeadmin.module').then(m => m.HomeNewModule), data: { oPermission: { permissionId: 'homeuser', restrictedPermissionsRedirect: '/main/home'}}},
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
