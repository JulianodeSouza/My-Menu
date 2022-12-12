import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadernoReceitasPageRoutingModule } from './caderno-receitas-routing.module';

import { CadernoReceitasPage } from './caderno-receitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadernoReceitasPageRoutingModule
  ],
  declarations: [CadernoReceitasPage]
})
export class CadernoReceitasPageModule {}
