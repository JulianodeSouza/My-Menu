import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMercadoPage } from './lista-mercado.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMercadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMercadoPageRoutingModule {}
