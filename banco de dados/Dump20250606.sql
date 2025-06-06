-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: sistemadenuncias
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@site.com','123456');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `denuncia`
--

DROP TABLE IF EXISTS `denuncia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `denuncia` (
  `idDenuncia` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `CPF` varchar(50) DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `dataEnvio` date DEFAULT NULL,
  `endereco` varchar(150) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `descricao` text NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  `CEP` varchar(10) NOT NULL,
  `complemento` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idDenuncia`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `denuncia`
--

LOCK TABLES `denuncia` WRITE;
/*!40000 ALTER TABLE `denuncia` DISABLE KEYS */;
INSERT INTO `denuncia` VALUES (1,'Carlos Eduardo Silva','carlos.eduardo@email.com','12345678909','(55) 99999-0001','2025-05-27','Avenida Central, s/n','Jardim Primavera','Moradores reclamam de um enorme buraco na Avenida Central, que já causou danos a carros e até acidentes de moto. A cratera tem mais de um metro de diâmetro e está no local há cinco semanas sem reparo da prefeitura.','/uploads/imagem1.jpg','97385000','Rua das Ac'),(2,'Ana Paula Machado','ana.paula@email.com','98765432100','(55) 99988-0002','2025-05-21','Cruzamento da Rua Marechal Floriano com Avenida Brasil, s/n','Bairro São Luiz','O semáforo do cruzamento entre a Rua Marechal Floriano e a Avenida Brasil está queimado há mais de 4 dias. Motoristas relatam riscos constantes de colisões e pedestres têm medo de atravessar.','/uploads/imagem2.jpg','97340000',''),(3,'Marcos Vinícius Oliveira','marcos.vinicius@email.com','11122233344','(55) 99977-0003','2025-02-13','Praça Principal, s/n','Bairro Vila Nova','A Praça Principal está tomada pelo lixo acumulado. Sacolas plásticas, garrafas e restos de comida se espalham pelo local. Moradores dizem que a coleta não acontece há mais de uma semana.','/uploads/imagem3.jpg','96570000','Rua Tirade'),(4,'Juliana Ferreira Santos','juliana.ferreira@email.com','55566677788','(55) 99966-0004','2025-04-19','Rua Marechal Deodoro, próximo à Escola Municipal Aurora, s/n','Bairro Nossa Senhora das Dores','A calçada em frente à Escola Municipal Aurora está cheia de rachaduras e buracos. Pais temem que crianças e idosos se machuquem ao passar por ali.','/uploads/imagem4.jpg','97015000',''),(5,'Rafael Gomes de Lima','rafael.gomes@email.com','99988877766','(55) 99955-0005','2025-03-01','Rua João Pessoa, s/n','Bairro Vila Rica','Um vazamento de esgoto a céu aberto na Rua João Pessoa está incomodando os moradores com mau cheiro e risco de doenças. Apesar das denúncias, o problema ainda não foi resolvido.','/uploads/imagem5.jpg','97200000',''),(6,'Marina Costa Alves','marina.costa@email.com','44433322211','(55) 99944-0006','2025-05-10','Viela dos Sonhos, s/n','Bairro Centro','Moradores da Viela dos Sonhos estão preocupados com a segurança. Todos os postes estão apagados à noite, tornando o local perigoso e favorecendo furtos e assaltos.','/uploads/imagem6.jpg','97300000','Avenida Ge'),(7,'Fernanda Lima Costa','fernanda.lima@email.com','32112345600','(55) 99933-0007','2025-03-19','Rua São Pedro, 321','Bairro Rosário','A praça do Bairro Rosário está com brinquedos quebrados, oferecendo risco às crianças. Alguns balanços estão soltos e há ferrugem em várias estruturas.','/uploads/imagem7.jpg','97385000','Praça São '),(8,'Bruno Henrique Duarte','bruno.duarte@email.com','65498732100','(55) 99922-0008','2024-11-10','Avenida Sete de Setembro, 1010','Bairro Centro','Há um ponto de ônibus sem cobertura na Avenida Sete de Setembro. Passageiros ficam expostos ao sol e à chuva enquanto esperam o transporte público.','/uploads/imagem8.jpg','97340000',''),(9,'Larissa Mendes Rocha','larissa.rocha@email.com','78945612300','(55) 99911-0009','2024-12-02','Rua Dom Pedro II, 45','Bairro Industrial','Fios elétricos soltos próximos a postes na Rua Dom Pedro II têm gerado medo entre os moradores. O risco de choque é evidente.','/uploads/imagem9.jpg','96570000',''),(10,'Tiago Silva Martins','tiago.martins@email.com','14725836900','(55) 99900-0010','2025-02-20','Rua das Laranjeiras, 88','Bairro Bela Vista','O bueiro na Rua das Laranjeiras está entupido há semanas, causando alagamentos em dias de chuva forte.','/uploads/imagem10.jpg','97015000','Próximo ao'),(11,'Isabela Ferreira Pinto','isabela.pinto@email.com','96385274100','(55) 98888-0011','2025-04-21','Travessa do Comércio, 12','Bairro São José','Comércio abandonado virou ponto de uso de drogas e insegurança na Travessa do Comércio. Moradores relatam medo de passar pelo local à noite.','/uploads/imagem11.jpg','97200000',''),(12,'Rodrigo Nunes Braga','rodrigo.braga@email.com','85274196300','(55) 98877-0012','2025-01-21','Rua Benjamin Constant, 400','Bairro Passo do Verde','A ciclovia da Rua Benjamin Constant está completamente apagada. Sem pintura visível, motoristas invadem o espaço dos ciclistas.','/uploads/imagem12.jpg','97300000','');
/*!40000 ALTER TABLE `denuncia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `horarioInicio` time DEFAULT NULL,
  `horarioFim` time DEFAULT NULL,
  `localAtendimento` varchar(255) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `emailGovernamental` varchar(100) DEFAULT NULL,
  `fotoUrl` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
INSERT INTO `funcionarios` VALUES (1,'Ana Paula Souza','Secretária de Saúde','08:00:00','17:00:00','Av. da Prevenção, nº 100 – Prédio da Vacina','(66) 99999-1234','ana.souza@vilanovanorte.gov','secretariaSaude.png'),(2,'Carlos Henrique Lima','Chefe de Gabinete','07:30:00','16:30:00','Rua dos Bastidores, nº 12 – Sala do Poder Oculto','(66) 99800-0001','carlos.lima@vilanovanorte.gov','chefeGabinete.jpg'),(3,'Maria Fernanda Costa','Diretora de Educação','08:00:00','17:00:00','Rua do Giz, nº 45 – Prédio das Ideias','(66) 99888-1122','maria.costa@vilanovanorte.gov','diretoraEducacao.jpg'),(4,'João Pedro Almeida','Engenheiro Civil','07:00:00','16:00:00','Av. das Obras, nº 999 – Bloco do Concreto','(66) 99777-2233','joao.almeida@vilanovanorte.gov','engenheiroCivil.png'),(5,'Luciana Ribeiro','Assistente Social','08:00:00','17:00:00','Rua da Empatia, nº 202 – Casa do Coração Aberto','(66) 99111-0000','luciana.ribeiro@vilanovanorte.gov','assistenteSocial.png'),(6,'Roberto Silva','Fiscal de Obras','06:30:00','15:30:00','Rua do Piso Torto, nº 13 – Fiscalização Total','(66) 99666-4455','roberto.silva@vilanovanorte.gov','fiscalObra.jpg'),(7,'Beatriz Martins','Técnica de Enfermagem','13:00:00','22:00:00','Av. do Curativo, nº 88 – Sala da Agulhinha','(66) 99555-6677','beatriz.martins@vilanovanorte.gov','tecnicaEnfermagem.jpg'),(8,'Eduardo Ramos','Motorista da Saúde','06:00:00','14:00:00','Rua dos Ônibus, nº 343 – Ponto Final da Saúde','(66) 99100-1234','eduardo.ramos@vilanovanorte.gov','motoristaSaude.png'),(9,'Juliana Neves','Professora de Educação Infantil','07:00:00','12:00:00','Rua dos Pequenos Gênios, nº 10 – Sala do Giz Colorido','(66) 99444-7788','juliana.neves@vilanovanorte.gov','professorainfantil.jpg'),(10,'Marcos Antônio Ferreira','Vigilante','18:00:00','06:00:00','Rua do Olho Vivo, nº 007 – Posto do Sussurro','(66) 99333-8899','marcos.ferreira@vilanovanorte.gov','vigilante.png'),(11,'Vanessa Duarte','Recepcionista','08:00:00','17:00:00','Av. do Bom Dia, nº 1 – Balcão do Sorriso','(66) 99123-4567','vanessa.duarte@vilanovanorte.gov','recepcionista.jpg'),(12,'André Luiz Barros','Contador','07:00:00','16:00:00','Rua da Calculadora, nº 123 – Prédio dos Números Certos','(66) 99001-1111','andre.barros@vilanovanorte.gov','contador.png'),(13,'Patrícia Gomes','Coordenadora Pedagógica','08:00:00','17:00:00','Rua do Planejamento Escolar, nº 404 – Sala da Lousa Estratégica','(66) 99777-3344','patricia.gomes@vilanovanorte.gov','coordenadora.jpg'),(14,'Diego Santos','Zelador','06:00:00','14:00:00','Rua da Vassoura, nº 33 – Cantinho do Capricho','(66) 99400-0011','diego.santos@vilanovanorte.gov','zelador.png'),(15,'Sandra Mello','Psicóloga','08:00:00','17:00:00','Alameda da Mente, nº 222 – Consultório da Escuta Ativa','(66) 99887-7654','sandra.mello@vilanovanorte.gov','psicologa.png'),(16,'Fábio Nascimento','Técnico de Informática','07:30:00','16:30:00','Av. do Wi-Fi, nº 404 – Sala do Reboot','(66) 99111-2222','fabio.nascimento@vilanovanorte.gov','tecnicoinformatica.jpg'),(17,'Larissa Freitas','Arquiteta','08:00:00','17:00:00','Rua dos Projetos, nº 88 – Torre da Criatividade','(66) 99222-3344','larissa.freitas@vilanovanorte.gov','arquiteta.png'),(18,'Henrique Castro','Agente de Fiscalização','07:00:00','16:00:00','Av. da Multa Justa, nº 300 – Posto do Apito','(66) 99000-4455','henrique.castro@vilanovanorte.gov','agentefiscalizacao.png'),(19,'Tatiane Lima','Secretária Executiva','08:00:00','17:00:00','Rua dos Recados, nº 9 – Sala da Agenda Lotada','(66) 99002-9999','tatiane.lima@vilanovanorte.gov','secretariaExecutiva.jpg'),(20,'Bruno Oliveira','Instrutor de Esportes','13:00:00','21:00:00','Av. do Esforço, nº 90 – Ginásio do Suor','(66) 99888-1010','bruno.oliveira@vilanovanorte.gov','instrutorEsportes.png');
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-06 15:18:12
