export class DividaViewModel {
  id: number;
  numeroTitulo: number;
  nomeDevedor: string;
  qtdeParcelas: number[];
  valorOriginal: number;
  valorAtualizado: number;
  diasAtraso: number;
  parcelas: DividaParcelaViewModel[]
}

export class DividaParcelaViewModel {
  id: number;
  valor: number;
  dataVencimento: any;
  diasAtraso: number;
  dividaId: number;
}