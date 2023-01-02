
/* Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Service */
import { ListaMercadoService } from 'src/app/core/services/requests/lista-mercado/lista-mercado.service';
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
    private cListaMercadoService: ListaMercadoService
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
    let iDataArray: Array<any> = [];

    this.cListaMercadoService.listaMercadoAcoes('GET', [])
      .then(($return: any) => {

        if ($return.itens_mercado.length > 0) {
          for (let wItens = 0; wItens < $return.itens_mercado.length; wItens++) {

            iDataArray.push({
              categoria: $return.itens_mercado.item(wItens).categoria,
              itens: [{
                produto: $return.itens_mercado.item(wItens).produto,
                quantidade: $return.itens_mercado.item(wItens).quantidade,
                unid_medida: $return.itens_mercado.item(wItens).unid_medida,
                class: '',
                selecionado: false
              }]
            });
          }

          this.iListaMercado = iDataArray;
        } else {
          this.iListaMercado = [];
        }
      });
  }

  // Funcao para adicionar css de marcado/desmarcado nos itens da lista
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
        console.log('não temos esta tela ainda.'); // Remover
        break;
    }
  }

  // Funcao para retornar à tela anterior
  public back() {
    this.cNavCtrl.back();
  }
}
