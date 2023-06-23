import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { HomeUserRoutingModule } from './homeuser-routing.module';
import { HomeUserComponent } from './homeuser.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    HomeUserRoutingModule
  ],
  declarations: [
    HomeUserComponent
  ]
})
export class HomeUserModule { }
