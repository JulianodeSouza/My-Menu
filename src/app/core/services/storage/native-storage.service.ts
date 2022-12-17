// Angular
import { Injectable } from '@angular/core';

// Plugins
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class NativeStorageService {

  constructor(private cStorage: NativeStorage) { }

  // funcao para salvar, buscar e remover itens do storage
  public useStorage(_Method: string, _Local: string, _Dados?: any) {
    if (_Method == 'GET') {
      return this.cStorage.getItem(_Local);
    } else if (_Method == 'POST') {
      return this.cStorage.setItem(_Local, _Dados);
    } else if (_Method == 'REMOVE') {
      return this.cStorage.remove(_Local);
    } else if (_Method == 'DELETE') {
      this.cStorage.clear();
    }
  }
}
