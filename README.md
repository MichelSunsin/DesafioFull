# DesafioFULL
App desenvolvido com Angular Material, C# e SQL para cadastro e listagem de dívidas.

## Instruções de instalação
1. Clone o repositório
2. No terminal cmd rode `dotnet restore` na pasta raiz.
3. No terminal cmd rode `npm install` na pasta <b>client</b>.
4. Execute a query que se encontra na pasta <u>Sql Queries</u> para criar as tabelas do banco de dados.
- No arquivo `applicationsettings.json` encontra-se a string de conexão com o banco de dados.
````json
{ 
   "ConnectionStrings": {
      "Default": "Server=localhost; Port=3306; Database=DesafioFull; Uid=root; Pwd=root;"
   },
}
````

- O arquivo `divida.service.ts`(client/src/app/services) contém a string <b>url</b>, utilizada para consultar o backend. Se o backend for executado em outro lugar que não https://localhost:5001, essa string deve ser alterada de acordo.
```typescript
url: string = 'https://localhost:5001';
````


## Instruções de execução
1. Use o terminal cmd para rodar `dotnet run` na pasta raiz.
2. Abra um novo terminal e, na pasta <b>client</b>, rode `ng serve`.
