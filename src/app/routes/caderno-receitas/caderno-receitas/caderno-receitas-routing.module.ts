import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadernoReceitasPage } from './caderno-receitas.page';

const routes: Routes = [
  {
    path: '',
    component: CadernoReceitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadernoReceitasPageRoutingModule {}
