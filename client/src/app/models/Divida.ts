import DividaParcela from './DividaParcela';

export default class Divida {
  id: number;
  numeroTitulo: string;
  nomeDevedor: string;
  cpfDevedor: string;
  porcentagemJuros: number;
  porcentagemMulta: number;
  parcelas: DividaParcela[] = [];

  updateFields(newValues: Divida) {
    const {
      id,
      numeroTitulo,
      nomeDevedor,
      cpfDevedor,
      porcentagemJuros,
      porcentagemMulta,
    } = newValues;

    this.id = id || 0;
    this.numeroTitulo = numeroTitulo;
    this.nomeDevedor = nomeDevedor;
    this.cpfDevedor = cpfDevedor;
    this.porcentagemJuros = porcentagemJuros;
    this.porcentagemMulta = porcentagemMulta;
  }
}
