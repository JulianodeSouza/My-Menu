/* Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Plugins */
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-lista-mercado',
  templateUrl: './lista-mercado.page.html',
  styleUrls: ['./lista-mercado.page.scss'],
})
export class ListaMercadoPage {

  // Variavel de preenchimento de Lista
  public iListaMercado: Array<any>;

  constructor(
    private cNavCtrl: NavController,
    private cStorage: NativeStorage,
  ) {
    this.inst();
    this.config();
  }

  ionViewWillEnter() {
    this.config();
  }

  // funcao de inicializacao
  public inst() {
    this.iListaMercado = [];
  }

  public config() {

    this.cStorage.getItem('lista_mercado')
      .then(($return: any) => {
        console.log($return)

      });


    this.searchLista();
  }

  public searchLista() {
    let vTeste: Array<any> = [];
    vTeste.push(
      {
        titulo: 'Frutas',
        itens: [
          { nome: 'Maça', qtd: 2, medida: 'Unid', selecionado: false, class: '' },
          { nome: 'Banana', qtd: 1, medida: 'Unid', selecionado: false, class: '' },
          { nome: 'Limão', qtd: 1.5, medida: 'Kg', selecionado: false, class: '' },
          { nome: 'Manga', qtd: 1, medida: 'Kg', selecionado: false, class: '' },
        ]
      },
      {
        titulo: 'Hortaliças',
        itens: [
          { nome: 'Abobrinha', qtd: 1, medida: 'Kg', selecionado: false, class: '' },
          { nome: 'Alface', qtd: 2, medida: 'Unid', selecionado: false, class: '' },
          { nome: 'Beterraba', qtd: 1.5, medida: 'Kg', selecionado: false, class: '' },
          { nome: 'Cenoura', qtd: 1, medida: 'Kg', selecionado: false, class: '' },
        ]
      },
    )

    this.iListaMercado = vTeste;
  }

  public marcaCheckBox(_Event) {

    if (!_Event.selecionado) {
      _Event.class = 'selecionado'

      // Remover do storage do celular quando selecionar, para caso saia da tela não tenha mais os itens na lista
    } else {
      _Event.class = '';

      // caso o usuário desmarque o item, adicionar de volta para o storage
    }
  }

  // funcao de redirecionamento de telas
  public navigate(_Tela: string) {
    switch (_Tela) {
      case 'add':
        this.cNavCtrl.navigateForward('add-lista');
        break;

      case 'edit':
        console.log('não temos esta tela ainda.');
        break;
    }
  }

  // Funcao para retornar à tela anterior
  public back() {
    this.cNavCtrl.back();
  }
}
