import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSemanaPageRoutingModule } from './menu-semana-routing.module';

import { MenuSemanaPage } from './menu-semana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSemanaPageRoutingModule
  ],
  declarations: [MenuSemanaPage]
})
export class MenuSemanaPageModule {}
