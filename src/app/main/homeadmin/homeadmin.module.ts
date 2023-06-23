import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomeAdminRoutingModule } from './homeadmin-routing.module';
import { HomeAdminComponent } from './homeadmin.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeAdminRoutingModule
  ],
  declarations: [
    HomeAdminComponent
  ]
})
export class HomeNewModule { }
