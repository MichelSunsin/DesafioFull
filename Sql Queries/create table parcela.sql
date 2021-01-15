CREATE TABLE `DesafioFull`.`Parcela` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Numero` INT NOT NULL,
  `Valor` DECIMAL(22,2) NOT NULL,
  `DataVencimento` DateTime NOT NULL,
  `DividaId` INT NULL,
  PRIMARY KEY (`Id`),
  INDEX `DividaId_idx` (`DividaId` ASC) VISIBLE,
  CONSTRAINT `FK__Divida_Parcela`
    FOREIGN KEY (`DividaId`)
    REFERENCES `DesafioFull`.`Divida` (`Id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);