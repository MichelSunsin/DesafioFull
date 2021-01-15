import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDividaComponent } from './components/add-divida/add-divida.component';
import { DividaGridComponent } from './components/divida-grid/divida-grid.component';

const routes: Routes = [
  {
    path: '',
    component: DividaGridComponent,
  },
  { path: 'add', component: AddDividaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
