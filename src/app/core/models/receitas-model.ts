export interface ReceitasForm {
  tipo: string;
  receitas: Array<[
    {
      nome_receita: string,
      ingredientes: [{ produto: string, qtd: number }],
      modo_prepraro: string
    }]>
}