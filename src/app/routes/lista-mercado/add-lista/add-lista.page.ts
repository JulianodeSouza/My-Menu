/** Angular */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/** Plugins */
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

/** Models */
import { ErroProdutosLista, ProdutosListaForm } from 'src/app/core/models/add-lista.model';
import { UnidMedidas } from './../../../core/models/add-lista.model';

/** Services */
import { ToastsService } from 'src/app/core/services/toasts/toasts.service'
import { DatabaseService } from './../../../core/services/backend/database.service';


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
  public iCategorias: Array<any>;
  public iUnidMedidas: Array<UnidMedidas>;

  /** Variavel de validacao */
  public iFormChange: boolean;

  constructor(
    private cNavCtrl: NavController,
    private cStorage: NativeStorage,
    private cToasts: ToastsService,
    private cDataBaseService: DatabaseService
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
    this.cDataBaseService.getDB()
      .then((db: SQLiteObject) => {
        let SQL: string = 'SELECT * FROM categoria_alimentos';
        let data: any = [];
        
        return db.executeSql(SQL, data)
          .then(($return: any) => {

            for (let i = 0; i < $return.rows.length; i++) {
              this.iCategorias.push($return.rows.item(i));
            }
          })
      })
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
      // case 'unid_medida':
      //   if (this.iForm.unid_medida == '') {
      //     this.iErro.unid_medida = true;
      //   } else {
      //     this.iErro.unid_medida = false;
      //   }
      //   break
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
      this.cStorage.setItem('lista_mercado', this.iForm)
        .then(() => {
          this.cToasts.toast('success', 'Produto salvo com sucesso!');
          this.back();
        }, ($error: any) => {
          console.log($error);
          this.cToasts.toast('danger', 'Ocorreu um erro tentar salvar seu produto.');
        });

    } else {
      this.cToasts.toast('warning', 'Preencha todos os campos obrigatórios!');
    }
  }

  // Funcao para retornar à tela anterior
  public back() {
    this.cNavCtrl.back();
  }
}
