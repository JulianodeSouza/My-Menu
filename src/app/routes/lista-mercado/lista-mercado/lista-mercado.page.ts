/* Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-mercado',
  templateUrl: './lista-mercado.page.html',
  styleUrls: ['./lista-mercado.page.scss'],
})
export class ListaMercadoPage {

  // Variavel de preenchimento de Lista
  public iListaMercado: Array<any>;

  constructor(
    private cNavCtrl: NavController
  ) {
    this.inst();
    this.config();
  }

  // funcao de inicializacao
  public inst() {
    this.iListaMercado = [];
  }

  public config() {
    // Verificar se no storage não tem nada salvo, caso tiver, chamar funcao para popular o array ListaMercado, caso contrário exibir mensagem na tela de nada preenchido


    this.searchLista();
  }

  public searchLista() {
    let vTeste: Array<any> = [];
    vTeste.push(
      {
        titulo: 'Frutas',        
        itens: [
          { nome: 'Maça', qtd: 2, medida: 'Unid', selecionado: false, class: ''},
          { nome: 'Banana', qtd: 1, medida: 'Unid', selecionado: false, class: ''},
          { nome: 'Limão', qtd: 1.5, medida: 'Kg', selecionado: false, class: ''},
          { nome: 'Manga', qtd: 1, medida: 'Kg', selecionado: false, class: ''},
        ]
      },
      {
        titulo: 'Hortaliças',
        itens: [
          { nome: 'Abobrinha', qtd: 1, medida: 'Kg', selecionado: false, class: ''},
          { nome: 'Alface', qtd: 2, medida: 'Unid', selecionado: false, class: ''},
          { nome: 'Beterraba', qtd: 1.5, medida: 'Kg', selecionado: false, class: ''},
          { nome: 'Cenoura', qtd: 1, medida: 'Kg', selecionado: false, class: ''},
        ]
      },
    )

    this.iListaMercado = vTeste;
  }

  public marcaCheckBox(_Event) {

    if(!_Event.selecionado) {
      _Event.class = 'selecionado'

      // Remover do storage do celular quando selecionar, para caso saia da tela não tenha mais os itens na lista
    } else {
      _Event.class = '';

      // caso o usuário desmarque o item, adicionar de volta para o storage
    }



  }



  // Funcao para retornar à tela principal
  public back() {
    this.cNavCtrl.back();
  }
}
