using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using MySqlConnector;
using System.Linq;
using DesafioFULL.Models;
using DesafioFULL.ViewModels;
using System.Runtime.ExceptionServices;

namespace DesafioFULL.Repositories
{
  public class DividaRepository : IDividaRepository
  {
    IConfiguration _configuration;

    public DividaRepository(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    public string GetConnectionString()
    {
      var connection = _configuration.GetConnectionString("Default");
      return connection;
    }

    public int Insert(Divida divida)
    {
      var connectionString = this.GetConnectionString();
      int id = 0;

      using (var db = new MySqlConnection(connectionString))
      {
        try
        {
          db.Open();
          var trans = db.BeginTransaction();
          var query = @"INSERT INTO Divida(NumeroTitulo, NomeDevedor, CPFDevedor, PorcentagemMulta, PorcentagemJuros)
                        VALUES(@NumeroTitulo, @NomeDevedor, @CPFDevedor, @PorcentagemMulta, @PorcentagemJuros);
                        SELECT LAST_INSERT_ID()";
          id = db.QuerySingle<int>(query, divida, transaction: trans);

          divida.Parcelas.ForEach(x => x.DividaId = id);
          query = "INSERT INTO Parcela(Numero, DataVencimento, Valor, DividaId) VALUES (@Numero, @DataVencimento, @Valor, @DividaId)";
          db.Execute(query, divida.Parcelas, transaction: trans);
          trans.Commit();
        }
        catch (Exception ex)
        {
          ExceptionDispatchInfo.Capture(ex).Throw();
        }
        finally
        {
          db.Close();
        }
        return id;
      }
    }
    public List<DividaViewModel> GetList()
    {
      List<DividaViewModel> dividas = new List<DividaViewModel>();
      var dividaDictionary = new Dictionary<int, DividaViewModel>();

      var connectionString = this.GetConnectionString();
      string query = @"SELECT Divida.Id,
                      Divida.NumeroTitulo,
                      Divida.NomeDevedor,
                      Divida.PorcentagemMulta,
                      Divida.PorcentagemJuros,
                      Parcela.Id,
                      Parcela.Numero,
                      Parcela.Valor,
                      Parcela.DataVencimento,
                      DAY(LAST_DAY(Now())) as DiasNoMes,
                      DATEDIFF(Now(), Parcela.DataVencimento) AS DiasAtraso,
                      Parcela.DividaId
                      FROM Divida INNER JOIN Parcela on Divida.Id = Parcela.DividaId";

      using (var db = new MySqlConnection(connectionString))
      {
        try
        {
          db.Open();
          dividas = db.Query<DividaViewModel, DividaParcelaViewModel, DividaViewModel>
          (query, (divida, parcela) =>
            {
              DividaViewModel dividaEntry;

              if (!dividaDictionary.TryGetValue(divida.Id, out dividaEntry))
              {
                dividaEntry = divida;
                dividaDictionary.Add(dividaEntry.Id, dividaEntry);
              }

              dividaEntry.Parcelas.Add(parcela);
              return dividaEntry;
            })
          .Distinct()
          .ToList();
        }
        catch (Exception ex)
        {
          ExceptionDispatchInfo.Capture(ex).Throw();
        }
        finally
        {
          db.Close();
        }
        return dividas;
      }
    }
  }
}