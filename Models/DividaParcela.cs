using System;

namespace DesafioFULL.Models
{
  public class DividaParcela
  {
    public int Id { get; set; }
    public int Numero { get; set; }
    public float Valor { get; set; }
    public DateTime DataVencimento { get; set; }
    public int DividaId { get; set; }
  }
}