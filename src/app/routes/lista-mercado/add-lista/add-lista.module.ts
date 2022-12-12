import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddListaPageRoutingModule } from './add-lista-routing.module';

import { AddListaPage } from './add-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddListaPageRoutingModule
  ],
  declarations: [AddListaPage]
})
export class AddListaPageModule {}
