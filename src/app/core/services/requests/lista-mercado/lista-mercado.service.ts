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

  // Funcao para pegar os dados estaticos para os comboBox 
  public listaMercadoDefaultData(_Method: string, _Tabelas: Array<string>, _Data?: any,) {
    let arrayTabelas: Array<string> = _Tabelas.slice(0);
    if (_Method == 'GET') {
      return this.cDataBaseService.getDB()
        .then((db: SQLiteObject) => {
          let sql = `SELECT * FROM ${arrayTabelas[0]} UNION SELECT * FROM ${arrayTabelas[1]}`

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

  // Funcao para salvar, editar e excluir os dados
  public listaMercadoAcoes(_Method: string, _Dados: any, _Cod?: number) {
    let vSql: string;

    if (_Method == 'GET') {
      if (_Cod != 0) {
        return this.cDataBaseService.getDB()
          .then((db: SQLiteObject) => {
            vSql = 'SELECT * FROM lista_mercado'

            return db.executeSql(vSql, _Dados)
              .then(($return: any) => {
                return { itens_mercado: $return.rows, sucesso: true, mensagem: 'Itens da lista de mercado' }
              });
          });
      } else {

        // Adicionar GET para edição

      }

    } else if (_Method == 'POST') {
      return this.cDataBaseService.getDB()
        .then((db: SQLiteObject) => {
          vSql = 'INSERT INTO lista_mercado(produto, categoria, quantidade, unid_medida) values (?,?,?,?)';
          let dados = [_Dados.produto, _Dados.categoria, _Dados.quantidade, _Dados.unid_medida];

          return db.executeSql(vSql, dados)
            .then(() => {
              return { sucesso: true, mensagem: 'Produto adicionado com sucesso na sua Lista de Mercado!' };
            })
            .catch(($error: any) => {
              console.error($error);
              return { sucesso: false, mensagem: 'Houve um erro ao tentar salvar seu produto.' };
            })
        })
    } else if (_Method == 'DELETE') {

      return this.cDataBaseService.getDB()
        .then((db: SQLiteObject) => {

          return db.executeSql(vSql, _Dados)
            .then(($return: any) => {
              vSql = `DELETE FROM lista_mercado WHERE id=${$return.rows.item(_Dados).id}`;

              db.executeSql(vSql, [])
                .then(() => {
                  return { sucesso: true, mensagem: 'Item excluído com sucesso!' };
                })
                .catch(($error: any) => {
                  console.error($error);
                  return { sucesso: false, mensagem: 'Erro ao excluí item.' };
                });
            });
        });
    }
  }








}
