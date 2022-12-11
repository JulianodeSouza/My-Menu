import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesReceitaPageRoutingModule } from './detalhes-receita-routing.module';

import { DetalhesReceitaPage } from './detalhes-receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesReceitaPageRoutingModule
  ],
  declarations: [DetalhesReceitaPage]
})
export class DetalhesReceitaPageModule {}
