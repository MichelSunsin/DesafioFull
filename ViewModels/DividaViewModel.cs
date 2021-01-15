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
    public decimal ValorAtualizado
    {
      get
      {
        decimal juros = 0;
        decimal multa = 0;
        if (DiasAtraso > 0)
        {
          Parcelas.ForEach(parcela =>
          {
            juros += decimal.Divide(decimal.Divide(PorcentagemJuros, 100), 30) * parcela.DiasAtraso * parcela.Valor;
          });
          multa = ValorOriginal * decimal.Divide(PorcentagemMulta, 100); // + juros;
          return ValorOriginal + multa + juros;
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