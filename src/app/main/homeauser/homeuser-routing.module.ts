import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeUserComponent } from './homeuser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeUserRoutingModule { }
