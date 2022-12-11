/** Angular */
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  /** Funcao de mensagens no rodape da tela */
  async toast(_Tipo: string, _Mensagem?: string) {
    let vIcon = '';

    switch (_Tipo) {
      case 'success':
        vIcon = "checkmark-outline";
        break;
      case 'warning':
        vIcon = "alert-outline";
        break;
      case 'danger':
        vIcon = "close-outline";
        break;
    }

    const toast = await this.toastController.create({
      message: _Mensagem || '',
      color: _Tipo,
      icon: vIcon,
      duration: 2000,
      position: 'bottom',
      animated: true,
      mode: "ios"
    });

    await toast.present();
  }

  /** Funcao de alerta */
  async presentAlert(_Tipo: string, _Mensagem?: string) {

    const alert = await this.alertController.create({
      header: _Tipo,
      message: _Mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
