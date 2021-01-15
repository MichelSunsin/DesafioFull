CREATE TABLE `Divida` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `NumeroTitulo` INT NOT NULL, 
  `NomeDevedor` VARCHAR(100) NOT NULL,
  `CPFDevedor` VARCHAR(11) NOT NULL,
  `PorcentagemMulta` INT NOT NULL,
  `PorcentagemJuros` INT NOT NULL, 
  PRIMARY KEY (`Id`));

CREATE TABLE `Parcela` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Numero` int NOT NULL,
  `Valor` decimal(22,2) NOT NULL,
  `DataVencimento` datetime NOT NULL,
  `DividaId` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `DividaId_idx` (`DividaId`),
  CONSTRAINT `FK__Divida_Parcela` FOREIGN KEY (`DividaId`) REFERENCES `Divida` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
);