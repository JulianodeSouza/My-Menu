/** Angular */
import { Injectable } from '@angular/core';

/** Plugins */
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ListaMercadoService {

  // Variavel para execucao do SQL
  private SQLExecute: SQLiteObject = null;

  constructor() { }

  // Método para salvar, alterar e remover items da lista
  public listaMercadoAcoes(_Method: string, _Tabela: string, _Data?: any,) {
    if (_Method == 'GET') {
      let sql = `SELECT * FROM ${_Tabela}`

      console.log("Chegou na request");


      return this.SQLExecute.executeSql(sql);
    }



  }







}
