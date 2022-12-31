import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
/** Angular */
import { Injectable } from '@angular/core';

/** Services */
import { DatabaseService } from './../../backend/database.service';

@Injectable({
  providedIn: 'root'
})
export class ListaMercadoService {

  constructor(
    private cDataBaseService: DatabaseService
  ) { }

  // Método para salvar, alterar e remover items da lista
  public listaMercadoDefaultData(_Method: string, _Tabelas: Array<string>, _Data?: any,) {
    let arrayTabelas: Array<string> = _Tabelas.slice(0);
    if (_Method == 'GET') {
      return this.cDataBaseService.getDB()
        .then((db: SQLiteObject) => {
          let sql = `SELECT alimentos FROM ${arrayTabelas[0]} UNION SELECT * FROM ${arrayTabelas[1]}`

          return db.executeSql(sql, _Data)
            .then(($return: any) => {
              return $return;
            })
            .catch(($error: any) => {
              console.error($error);
            });
        });
    }
  }
}
