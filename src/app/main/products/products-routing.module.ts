import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';


const routes: Routes = [{path: '', component: ProductsHomeComponent},
{path: 'grid', component: ProductsGridComponent},
{path: ":ID", component: ProductsDetailComponent},
{path: "grid/:ID", component: ProductsDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
