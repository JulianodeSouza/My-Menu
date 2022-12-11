/** Angular */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Services */
import { NativeStorageService } from './../../../../core/services/storage/native-storage.service';
import { ToastsService } from './../../../../core/services/toasts/toasts.service';

/** Models */
import { ReceitasForm } from 'src/app/core/models/receitas-model';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.page.html',
  styleUrls: ['./detalhes-receita.page.scss'],
})
export class DetalhesReceitaPage {
  /** Variavel de preenchimento da lista */
  public iReceitas: Array<ReceitasForm>;

  constructor(
    private cNavCtrl: NavController,
    private cStorage: NativeStorageService,
    private cToasts: ToastsService
  ) {
    this.inst();
    this.config();
  }

  // Funcao de inicializacao das variaveis
  public inst() {
    this.iReceitas = [];
  }

  public config() {
    let vDataArray = [];

    this.cStorage.useStorage('GET', 'detalhes')
      .then(($return: any) => {
        vDataArray.push($return);
      })
      .catch((error: any) => {
        this.cToasts.presentAlert('Erro', 'Ocorreu um problema ao carregar suas receitas.');
        this.back();
      })

    this.iReceitas = vDataArray;
  }

  // Funcao para retornar à tela principal
  public back() {
    this.cNavCtrl.navigateBack('caderno-receitas');
  }
}
