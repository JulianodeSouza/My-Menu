
/* Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Service */
import { NativeStorageService } from './../../core/services/storage/native-storage.service';

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
    private cStorage: NativeStorageService,
  ) {
    this.inst();
    this.searchLista();
  }

  ionViewWillEnter() {
    this.searchLista();
  }

  // funcao de inicializacao
  public inst() {
    this.iListaMercado = [];
  }

  /** Funcao para buscar os itens cadastrados */
  public searchLista() {
    let vTeste: Array<any> = [];

    // Puxar a tabela de itens do mercado

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
        this.cNavCtrl.navigateForward('add-lista'); // Remover
        break;

      case 'edit':
        console.log('não temos esta tela ainda.'); // Remover
        break;
    }
  }

  // Funcao para retornar à tela anterior
  public back() {
    this.cNavCtrl.back();
  }
}
