/** Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Services */
import { NativeStorageService } from './../../../core/services/storage/native-storage.service';

@Component({
  selector: 'app-caderno-receitas',
  templateUrl: './caderno-receitas.page.html',
  styleUrls: ['./caderno-receitas.page.scss'],
})
export class CadernoReceitasPage {
  // Variaveis de preenchimento de lista
  public iCategoriasReceitas: Array<any>; // criar model para tipagem do array, criar este array nas inicialiação do app

  constructor(
    private cNavCtrl: NavController,
    private cStorage: NativeStorageService
  ) {
    this.inst();
    this.config();
  }

  // Funcao de inicializacao de variaveis
  inst() {
    this.iCategoriasReceitas = [];
  }

  // Funcao de configuracao da page
  public config() {
    this.iCategoriasReceitas.push(
      {
        tipo: 'Refeições',
        receitas: [
          {
            nome_receita: 'Arroz e Feijão',
            ingredientes: [
              { produto: 'Arroz', qtd: 1 },
              { produto: 'Feijão', qtd: 1 },
            ],
            modo_preparo: 'Texto de modo de prepraro'
          },
          {
            nome_receita: 'Massa com Molho',
            ingredientes: [
              { produto: 'Massa', qtd: 1 },
              { produto: 'Molho de tomate', qtd: 1 },
              { produto: 'Cebola', qtd: 1 },
            ],
            modo_preparo: 'Texto de modo de prepraro'
          }
        ]
      },
      { tipo: 'Lanches', receitas: [] },
      {
        tipo: 'Sobremesas',
        receitas: [
          {
            nome_receita: 'Pudim',
            ingredientes: [
              { produto: 'leite condensado', qtd: 1 },
              { produto: 'lata de leite', qtd: 1 },
              { produto: 'Ovos inteiros', qtd: 3 },
            ],
            modo_preparo: 'Texto de modo de prepraro'
          }
        ]
      }
    );
  }

  // Funcao para navegar pro detalhes
  public navigate(_Tela: string) {
    for (let wReceita of this.iCategoriasReceitas) {
      if (wReceita.tipo == _Tela) {
        this.cStorage.useStorage('POST', 'detalhes', wReceita);

        break;
      }
    }

    this.cNavCtrl.navigateForward('detalhes-receita');
  }

  // Funcao para retornar à tela principal
  public back() {
    this.cNavCtrl.navigateBack('');
  }
}
