import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';


@NgModule({
  declarations: [ProductsHomeComponent, ProductsGridComponent, ProductsDetailComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
