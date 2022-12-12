/** Angular */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

/** Plugins */
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

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
    private cStatusBar: StatusBar,
    private cSplashScreen: SplashScreen,
    private cStorage: NativeStorage
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
        this.cStatusBar.styleDefault();
        this.cSplashScreen.hide();

        
        this.cStorage.setItem('cat/unid_medidas', vDados);
      })
  }
}
