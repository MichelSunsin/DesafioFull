using System.Linq;
using System.Collections.Generic;

namespace DesafioFULL.ViewModels
{
  public class DividaViewModel
  {
    public int Id { get; set; }
    public int NumeroTitulo { get; set; }
    public string NomeDevedor { get; set; }
    public int PorcentagemMulta { get; set; }
    public int PorcentagemJuros { get; set; }
    public int QtdeParcelas
    {
      get { return Parcelas.Count; }
      set { QtdeParcelas = value; }
    }
    public decimal ValorOriginal
    {
      get
      {
        decimal soma = 0;
        Parcelas.ForEach(parcela => soma += parcela.Valor);
        return soma;
      }
      set { ValorOriginal = value; }
    }
    public decimal ValorMulta
    {
      get
      {
        return ValorOriginal * decimal.Divide(PorcentagemMulta, 100);
      }
      set { ValorMulta = value; }
    }
    public decimal ValorAtualizado
    {
      get
      {
        decimal jurosTotal = 0;
        if (DiasAtraso > 0)
        {
          Parcelas.ForEach(parcela =>
          {
            parcela.Juros = decimal.Divide(decimal.Divide(PorcentagemJuros, 100), parcela.DiasNoMes) * parcela.DiasAtraso * parcela.Valor;
            jurosTotal += parcela.Juros;
          });
          return ValorOriginal + ValorMulta + jurosTotal;
        }
        else { return ValorOriginal; }
      }
      set { ValorAtualizado = value; }
    }
    public int DiasAtraso
    {
      get { return this.Parcelas.Max(parcelas => parcelas.DiasAtraso); }
      set { DiasAtraso = value; }
    }
    public List<DividaParcelaViewModel> Parcelas { get; set; } = new List<DividaParcelaViewModel>();
  }
}