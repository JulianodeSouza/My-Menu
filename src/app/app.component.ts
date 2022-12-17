/** Angular */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

/** Services */
import { NativeStorageService } from './core/services/storage/native-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  /** Variaveis de preenchimento de lista */
  public iCategorias: Array<any>;
  public iUnidMedidas: Array<any>;

  constructor(
    private cPlatform: Platform,
    private cStorage: NativeStorageService
  ) {
    this.inst();
    this.initializeApp();
  }

  /** Função para inicializar as variáveis */
  public inst() {
    this.iCategorias = [];
    this.iUnidMedidas = [];
  }


  public initializeApp() {
    this.iCategorias.push('Frutas', 'Hortaliças', 'Carboidratos', 'Proteinas', 'Cereais', 'Pães', 'Leguminosos', 'Temperos');
    this.iUnidMedidas.push('KG', 'Unid', 'g');

    let vDados = {
      categorias: this.iCategorias,
      unid_medidas: this.iUnidMedidas
    }

    this.cPlatform.ready()
      .then(() => {
        this.cStorage.useStorage('POST', 'cat/unid_medidas', vDados);
      })
  }
}
