Create Database sistemaDenuncias;


use sistemaDenuncias;

Create Table usuario (
  idUsuario int auto_increment primary key,
  nome varchar(50),
  telefone varchar(20),
  CPF varchar(14) not null,
  sexo varchar(20),
  email varchar(50),
  dataNasc date
);

INSERT INTO Usuario (nome, telefone, CPF, sexo, email, dataNasc) VALUES
('Ana Maria Silva', '11987654321', '12345678901', 'Feminino', 'ana.silva@email.com', '1990-05-12'),
('João Pedro Souza', '21999887766', '98765432100', 'Masculino', 'joao.souza@email.com', '1985-11-23'),
('Mariana Costa', '31991234567', '45678912300', 'Feminino', 'mariana.costa@email.com', '1993-07-15'),
('Carlos Alberto', '11988776655', '32165498700', 'Masculino', 'carlos.alberto@email.com', '1978-03-09'),
('Fernanda Oliveira', '11977665544', '65498732100', 'Feminino', 'fernanda.oliveira@email.com', '2000-01-20');

CREATE TABLE denuncias (
  idDenuncia int primary key auto_increment,
  endereco varchar(150) not null,
  Bairro varchar(50) not null,
  descricao text not null,
  imgUrl varchar(255) not null,
  CEP varchar(10) not null,
  Complemento varchar(10),
  idUsuario int,
  FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO denuncias (endereco, Bairro, descricao, imgUrl, CEP, Complemento, idUsuario) VALUES
('Rua das Laranjeiras, 45', 'Jardins', 'Acúmulo de lixo na calçada há mais de uma semana.', '', '01415-002', 'Ap 101', 1),

('Av. Copacabana, 200', 'Centro', 'Esgoto a céu aberto causando mau cheiro.', '', '22060-002', 'Sala 5', 2),

('Rua do Cruzeiro, 55', 'Savassi', 'Poste com fiação exposta, risco de choque.', '','30140-080', 'Casa', 3),

('Av. das Palmeiras, 987', 'Zona Sul', 'Buraco grande na via causando acidentes.', '', '90630-000', 'Fundos', 4),

('Rua Goiás, 1234', 'Setor Oeste', 'Vazamento de água constante na calçada.', '', '74120-090', 'Ap 804', 5);




