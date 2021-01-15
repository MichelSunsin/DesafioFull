using System.Collections.Generic;
using DesafioFULL.Models;
using DesafioFULL.ViewModels;

namespace DesafioFULL.Repositories
{
  public interface IDividaRepository
  {
    int Insert(Divida divida);
    List<DividaViewModel> GetList();
  }
}