import DividaParcelaViewModel from './DividaParcelaViewModel';

export class DividaViewModel {
  id: number;
  numeroTitulo: number;
  nomeDevedor: string;
  qtdeParcelas: number[];
  valorOriginal: number;
  valorMulta: number;
  valorAtualizado: number;
  diasAtraso: number;
  parcelas: DividaParcelaViewModel[];
}
