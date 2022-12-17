export interface ReceitasForm {
  tipo: string;
  receitas: Array<
    {
      nome_receita: string,
      ingredientes: Array<{ produto: string, qtd: number }>,
      modo_preparo: string
    }>
}