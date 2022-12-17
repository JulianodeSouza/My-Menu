import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSemanaPage } from './menu-semana.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSemanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSemanaPageRoutingModule {}
