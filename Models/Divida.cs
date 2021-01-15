using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DesafioFULL.Models
{
  public class Divida
  {
    [Key]
    [Display(Name = "Id")]
    public int Id { get; set; }
    public int NumeroTitulo { get; set; }
    public string NomeDevedor { get; set; }
    public string CPFDevedor { get; set; }
    public int PorcentagemMulta { get; set; }
    public int PorcentagemJuros { get; set; }
    public List<DividaParcela> Parcelas { get; set; } = new List<DividaParcela>();
  }
}