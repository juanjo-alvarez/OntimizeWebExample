import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsChartComponent } from './products-chart/products-chart.component';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [ProductsHomeComponent, ProductsGridComponent, ProductsDetailComponent, ProductsChartComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    OChartModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
