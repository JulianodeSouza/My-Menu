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
  public listaMercadoDefaultData(_Method: string, _Tabelas: Array<string>, _Data?: any,) {
    let arrayTabelas: Array<string> = _Tabelas.slice(0);
    let data: any = _Data;


    console.log(arrayTabelas[0])






    if (_Method == 'GET') {
      let sql = `SELECT * FROM ${arrayTabelas[0]} UNION SELECT * FROM ${arrayTabelas[1]}`

      return this.SQLExecute.executeSql(sql, data)
    }



  }







}
