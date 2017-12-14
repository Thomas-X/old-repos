-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 05 dec 2016 om 10:13
-- Serverversie: 5.7.14
-- PHP-versie: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flowershop`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `boeketten`
--

CREATE TABLE `boeketten` (
  `idboeketten` int(11) NOT NULL,
  `idgebruiker` int(11) DEFAULT NULL,
  `naam` varchar(255) DEFAULT NULL,
  `prijs` int(11) DEFAULT NULL,
  `boeketurl` varchar(255) DEFAULT NULL,
  `bloemsoortenboeket` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `boeketten`
--

INSERT INTO `boeketten` (`idboeketten`, `idgebruiker`, `naam`, `prijs`, `boeketurl`, `bloemsoortenboeket`) VALUES
(1, 1, 'Paarse bloem boeket', 3, 'https://www.bloemenbezorgenhelmond.nl/wp-content/uploads/2014/01/Veldboeket_Roze_Paars.jpg', 'Paarse bloem,Blauwe bloem'),
(2, 1, 'Zon boeket', 6, 'https://www.123bloemenbestellen.nl/product-afbeelding/boeket-bloemen-0034.jpg', 'Zonnebloem, groene blaadjes'),
(3, 1, 'Liefdevolle boeket', 2, 'http://bijzondergroen.nl/images/groot/--roze-rozen-gerbera-boeket-bloemen-bestellen-03.jpg', 'Rode Bloem,Roze Bloem'),
(41, NULL, 'geel bloem boeket', 22, NULL, 'Paarse bloem,Blauwe bloem,gele bloem');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `user`
--

CREATE TABLE `user` (
  `idgebruiker` int(11) NOT NULL,
  `voornaam` varchar(45) DEFAULT NULL,
  `tussenvoegsel` varchar(45) DEFAULT NULL,
  `achternaam` varchar(45) DEFAULT NULL,
  `loginnaam` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `user`
--

INSERT INTO `user` (`idgebruiker`, `voornaam`, `tussenvoegsel`, `achternaam`, `loginnaam`, `password`) VALUES
(1, 'someguy', 'of', 'someguyinggton', 'someguy', '1234');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `boeketten`
--
ALTER TABLE `boeketten`
  ADD PRIMARY KEY (`idboeketten`),
  ADD KEY `fk_boeketten_user_idx` (`idgebruiker`);

--
-- Indexen voor tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idgebruiker`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `boeketten`
--
ALTER TABLE `boeketten`
  MODIFY `idboeketten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT voor een tabel `user`
--
ALTER TABLE `user`
  MODIFY `idgebruiker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `boeketten`
--
ALTER TABLE `boeketten`
  ADD CONSTRAINT `fk_boeketten_user` FOREIGN KEY (`idgebruiker`) REFERENCES `user` (`idgebruiker`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
