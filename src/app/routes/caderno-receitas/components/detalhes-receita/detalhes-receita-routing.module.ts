import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesReceitaPage } from './detalhes-receita.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesReceitaPageRoutingModule {}
