import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMercadoPageRoutingModule } from './lista-mercado-routing.module';

import { ListaMercadoPage } from './lista-mercado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMercadoPageRoutingModule
  ],
  declarations: [ListaMercadoPage]
})
export class ListaMercadoPageModule {}
