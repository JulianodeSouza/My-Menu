/* Angular*/
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private cNavCtrl: NavController
  ) {}

  // Funcao para navegar entre as telas
  public navigate(_Tela: string) {
    switch (_Tela) {
      case 'receitas':
        this.cNavCtrl.navigateForward('caderno-receitas');
        break;
      case 'menu':
        this.cNavCtrl.navigateForward('menu-semana');
        break;
      case 'mercado':
        this.cNavCtrl.navigateForward('lista-mercado');
        break;
    }
  }
}
