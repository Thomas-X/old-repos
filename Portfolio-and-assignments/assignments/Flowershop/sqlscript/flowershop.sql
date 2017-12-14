-- MySQL Script generated by MySQL Workbench
-- 11/23/16 09:53:04
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema flowershop
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `flowershop` ;

-- -----------------------------------------------------
-- Schema flowershop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `flowershop` DEFAULT CHARACTER SET utf8 ;
USE `flowershop` ;

-- -----------------------------------------------------
-- Table `flowershop`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flowershop`.`user` ;

CREATE TABLE IF NOT EXISTS `flowershop`.`user` (
  `idgebruiker` INT NOT NULL AUTO_INCREMENT,
  `voornaam` VARCHAR(45) NULL,
  `tussenvoegsel` VARCHAR(45) NULL,
  `achternaam` VARCHAR(45) NULL,
  `loginnaam` VARCHAR(45) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`idgebruiker`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `flowershop`.`boeketten`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flowershop`.`boeketten` ;

CREATE TABLE IF NOT EXISTS `flowershop`.`boeketten` (
  `idboeketten` INT NOT NULL AUTO_INCREMENT,
  `idgebruiker` INT NULL,
  `naam` VARCHAR(255) NULL,
  `prijs` INT NULL,
  `boeketurl` VARCHAR(255) NULL,
  `bloemsoortenboeket` TEXT(65000) NULL,
  PRIMARY KEY (`idboeketten`),
  INDEX `fk_boeketten_user_idx` (`idgebruiker` ASC),
  CONSTRAINT `fk_boeketten_user`
    FOREIGN KEY (`idgebruiker`)
    REFERENCES `flowershop`.`user` (`idgebruiker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `flowershop`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `flowershop`;
INSERT INTO `flowershop`.`user` (`idgebruiker`, `voornaam`, `tussenvoegsel`, `achternaam`, `loginnaam`, `password`) VALUES (1, 'someguy', 'of', 'someguyinggton', 'someguy', '1234');

COMMIT;


-- -----------------------------------------------------
-- Data for table `flowershop`.`boeketten`
-- -----------------------------------------------------
START TRANSACTION;
USE `flowershop`;
INSERT INTO `flowershop`.`boeketten` (`idboeketten`, `idgebruiker`, `naam`, `prijs`, `boeketurl`, `bloemsoortenboeket`) VALUES (1, 1, 'Boeket #1', 3,19, 'https://www.bloemenbezorgenhelmond.nl/wp-content/uploads/2014/01/Veldboeket_Roze_Paars.jpg', 'Paarse bloem,Blauwe bloem');
INSERT INTO `flowershop`.`boeketten` (`idboeketten`, `idgebruiker`, `naam`, `prijs`, `boeketurl`, `bloemsoortenboeket`) VALUES (2, 1, 'Boeket #2', 6,27, 'https://www.123bloemenbestellen.nl/product-afbeelding/boeket-bloemen-0034.jpg', 'Zonnebloem, groene blaadjes');
INSERT INTO `flowershop`.`boeketten` (`idboeketten`, `idgebruiker`, `naam`, `prijs`, `boeketurl`, `bloemsoortenboeket`) VALUES (3, 1, 'Boeket #3', 1,87, 'http://bijzondergroen.nl/images/groot/--roze-rozen-gerbera-boeket-bloemen-bestellen-03.jpg', 'Rode Bloem,Roze Bloem');

COMMIT;
