/** Angular */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'caderno-receitas',
    loadChildren: () => import('./routes/caderno-receitas/caderno-receitas.module').then(m => m.CadernoReceitasPageModule)
  },
  {
    path: 'menu-semana',
    loadChildren: () => import('./routes/menu-semana/menu-semana/menu-semana.module').then(m => m.MenuSemanaPageModule)
  },
  {
    path: 'lista-mercado',
    loadChildren: () => import('./routes/lista-mercado/lista-mercado.module').then(m => m.ListaMercadoPageModule)
  },
  {
    path: 'detalhes-receita',
    loadChildren: () => import('./routes/caderno-receitas/components/detalhes-receita/detalhes-receita.module').then(m => m.DetalhesReceitaPageModule)
  },
  {
    path: 'add-lista',
    loadChildren: () => import('./routes/lista-mercado/add-lista/add-lista.module').then(m => m.AddListaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
