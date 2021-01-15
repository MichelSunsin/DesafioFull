CREATE TABLE `DesafioFull`.`Divida` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `NumeroTitulo` INT NOT NULL, 
  `NomeDevedor` VARCHAR(100) NOT NULL,
  `CPFDevedor` VARCHAR(50) NOT NULL,
  `PorcentagemMulta` INT NOT NULL,
  `PorcentagemJuros` INT NOT NULL, 
  PRIMARY KEY (`Id`))