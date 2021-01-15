using System;

namespace DesafioFULL.ViewModels
{
  public class DividaParcelaViewModel
  {
    public int Id { get; set; }
    public int Numero { get; set; }
    public decimal Valor { get; set; }
    public decimal Juros { get; set; }
    public DateTime DataVencimento { get; set; }
    public int DiasNoMes { get; set; }
    public int DiasAtraso { get; set; }
    public int DividaId { get; set; }
  }
}