export interface ProdutosListaForm {
  produto: string,
  categoria: string,
  quantidade: number,
  unid_medida: string
}

export interface ErroProdutosLista {
  produto: boolean,
  quantidade: boolean,
  unid_medida: boolean
}

export interface UnidMedidas {
  id: number;
  unidade: string;
}