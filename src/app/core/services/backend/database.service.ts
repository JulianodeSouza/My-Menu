/** Angular */
import { Injectable } from '@angular/core';

/** Plugins */
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

/** Services */
import { ToastsService } from './../toasts/toasts.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // Variavel de execucao do SQL
  private iDB: SQLiteObject

  constructor(
    private cSqlite: SQLite,
    private cToastService: ToastsService
  ) { }

  // Funcao para abrir o banco de dados
  public getDB() {
    return this.cSqlite.create({
      name: 'myMenu.db',
      location: 'default'
    })
      .catch(() => {
        this.cToastService.presentAlert('Erro', 'Ocorreu um erro ao abrir o banco de dados.');
      });
  }

  // Cria a estrutura básica do banco de dados
  public createDataBase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

        // Insere dados padrões do app
        this.insertDataDefaultAlimentos(db);
        this.insertDefaultDataUnidMedidas(db);
      })
      .catch($error => {
        console.log($error);
        this.cToastService.presentAlert('Erro', 'Ocorreu um erro ao criar as tabelas.');
      });
  }

  // Funcao para criar tabelas
  private createTables(_Db: SQLiteObject) {
    return _Db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categoria_alimentos(id INTEGER PRIMARY KEY AUTOINCREMENT, alimentos TEXT, tipo TEXT)'],
      ['CREATE TABLE IF NOT EXISTS unid_medidas(id INTEGER PRIMARY KEY AUTOINCREMENT, unidade TEXT, tipo TEXT);'],
      ['CREATE TABLE IF NOT EXISTS lista_mercado(id INTEGER PRIMARY KEY AUTOINCREMENT, produto TEXT, categoria TEXT, quantidade FLOAT, unid_medida TEXT);']
    ]);
  }

  private insertDataDefaultAlimentos(_Db: SQLiteObject) {
    return _Db.executeSql('select COUNT(id) as alimentos from categoria_alimentos', [])
      .then(($return) => {
        if ($return.rows.item(0).alimentos == 0) {
          _Db.sqlBatch([
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Frutas', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Hortaliças', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Carboidratos', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Proteinas', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Cereais', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Pães', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Leguminosos', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Temperos', 'alimentos']],
            ['INSERT into categoria_alimentos (alimentos, tipo) values (?, ?)', ['Laticínios', 'alimentos']],
          ])
            .then(() => console.log('Categorias de alimentos inseridas com sucesso!'))
            .catch(($error) => {
              console.log('Houve um erro ao inserir as categorias de alimentos');
              console.error($error);
            })
        }
      });
  }

  private insertDefaultDataUnidMedidas(_Db: SQLiteObject) {

    return _Db.executeSql('select COUNT(id) as unid from unid_medidas', [])
      .then(($return: any) => {

        if ($return.rows.item(0).unid == 0) {
          _Db.sqlBatch([
            ['INSERT into unid_medidas (unidade, tipo) values (?, ?)', ['KG', 'medidas']],
            ['INSERT into unid_medidas (unidade, tipo) values (?, ?)', ['Litros', 'medidas']],
            ['INSERT into unid_medidas (unidade, tipo) values (?, ?)', ['g', 'medidas']],
            ['INSERT into unid_medidas (unidade, tipo) values (?, ?)', ['Unid', 'medidas']],
          ])
            .then(() => console.log("Unidades de medidas inseridas com sucesso!"))
            .catch(($error) => {
              console.log('Houve um erro ao inserir as unidades de medidas.')
              console.error($error);
            });
        }
      });
  }
}
