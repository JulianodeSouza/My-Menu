/** Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Plugins */
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

/** Models */
import { CatAlimentos, ErroProdutosLista, ProdutosListaForm } from 'src/app/core/models/add-lista.model';
import { UnidMedidas } from './../../../core/models/add-lista.model';

/** Services */
import { ToastsService } from 'src/app/core/services/toasts/toasts.service'
import { ListaMercadoService } from './../../../core/services/requests/lista-mercado/lista-mercado.service';

@Component({
  selector: 'app-add-lista',
  templateUrl: './add-lista.page.html',
  styleUrls: ['./add-lista.page.scss'],
})
export class AddListaPage {

  /** Variavel de formulário */
  public iForm: ProdutosListaForm;
  public iErro: ErroProdutosLista;

  /** Variaveis de preenchimento de lista */
  public iCategorias: Array<CatAlimentos>;
  public iUnidMedidas: Array<UnidMedidas>;

  /** Variavel de validacao */
  public iFormChange: boolean;

  constructor(
    private cNavCtrl: NavController,
    private cToasts: ToastsService,
    private cListaMercadoService: ListaMercadoService
  ) {
    this.inst();
    this.config();
  }

  /** Funcao para inicializar as variaveis */
  public inst() {
    this.iForm = {
      produto: '',
      categoria: '',
      quantidade: 0,
      unid_medida: ''
    };

    this.iErro = {
      produto: false,
      quantidade: false,
      unid_medida: false
    }

    this.iCategorias = [];
    this.iUnidMedidas = [];

    this.iFormChange = false;
  }

  /** Funcao de configuracoes */
  public config() {

    this.cListaMercadoService.listaMercadoDefaultData('GET', ['categoria_alimentos', 'unid_medidas'], [])
      .then(($return: any) => {

        for (let i = 0; i < $return.rows.length; i++) {
          if ($return.rows.item(i).tipo == 'medidas') {
            this.iUnidMedidas.push($return.rows.item(i));
          } else {
            this.iCategorias.push($return.rows.item(i));
          }
        }
      });
  }

  // funcao para alterar o valor do comboBox
  alteraComboBox(_Event: any, _Campo: string) {
    if (_Campo == 'categoria') {
      this.iForm.categoria = _Event.target.value;
    } else {
      this.iForm.unid_medida = _Event.target.value;

      this.validaCampos('unid_medida');
    }
  }

  /** Funcao para validar se os campos estão preenchidos */
  public validaCampos(_Campo: string) {
    switch (_Campo) {
      case 'produto':
        if (this.iForm.produto == '') {
          this.iErro.produto = true;
        } else {
          this.iErro.produto = false;
        }
        break;
      case 'quantidade':
        if (this.iForm.quantidade <= 0 || this.iForm.quantidade == null) {
          this.iErro.quantidade = true;
        } else {
          this.iErro.quantidade = false;
        }
        break
      case 'unid_medida':
        if (this.iForm.unid_medida == '') {
          this.iErro.unid_medida = true;
        } else {
          this.iErro.unid_medida = false;
        }
        break
    }

    this.iFormChange = true;
  };

  /** Funcao para limpar as validações ao salvar */
  public validateForm() {
    if (this.iForm.produto == '') {
      this.iErro.produto = true;
    } else {
      this.iErro.produto = false;
    }

    if (this.iForm.quantidade <= 0) {
      this.iErro.quantidade = true;
    } else {
      this.iErro.quantidade = false;
    }

    if (this.iForm.unid_medida == '') {
      this.iErro.unid_medida = true;
    } else {
      this.iErro.unid_medida = false;
    }

    if (!this.iErro.produto && !this.iErro.quantidade && !this.iErro.unid_medida) {
      return true;
    } else {
      return false;
    }
  }

  // Funcao para salvar o item exibir na lista de mercado
  public addItem() {
    if (this.validateForm()) {
      
      this.cListaMercadoService.listaMercadoAcoes('POST', this.iForm)
        .then(($return: any) => {
          if ($return.sucesso) {
            this.cToasts.toast('success', $return.mensagem);           
            this.back();
          } else {
            this.cToasts.toast('danger', $return.mensagem);
          }
        });
    } else {
      this.cToasts.toast('warning', 'Preencha todos os campos obrigatórios!');
    }
  }

  // Funcao para retornar à tela anterior
  public back() {
    this.cNavCtrl.back();
  }

  // funcao para limpar o formulario
  private clearForm() {
    this.iForm = {
      produto: '',
      categoria: '',
      quantidade: 0,
      unid_medida: ''
    }
  }
}
