using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using DesafioFULL.Models;
using DesafioFULL.Repositories;

namespace DesafioFULL.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class DividaController : ControllerBase
  {
    private readonly IDividaRepository _repository;
    public DividaController(IDividaRepository repository)
    {
      _repository = repository;
    }

    // Get: 
    [HttpGet]
    public ActionResult<List<Divida>> GetList()
    {
      var dividas = _repository.GetList();
      if (dividas.Count > 0)
        return Ok(dividas);
      else return NotFound();
    }

    [HttpPost]
    public ActionResult<int> Post([FromBody] Divida divida)
    {
      _repository.Insert(divida);
      return Ok();
    }
  }
}
