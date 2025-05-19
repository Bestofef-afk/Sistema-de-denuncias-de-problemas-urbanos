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


INSERT INTO
  Usuario (nome, telefone, CPF, sexo, email, dataNasc)
VALUES
  (
    'Ana Maria Silva',
    '11987654321',
    '12345678901',
    'Feminino',
    'ana.silva@email.com',
    '1990-05-12'
  ),
  (
    'João Pedro Souza',
    '21999887766',
    '98765432100',
    'Masculino',
    'joao.souza@email.com',
    '1985-11-23'
  ),
  (
    'Mariana Costa',
    '31991234567',
    '45678912300',
    'Feminino',
    'mariana.costa@email.com',
    '1993-07-15'
  ),
  (
    'Carlos Alberto',
    '11988776655',
    '32165498700',
    'Masculino',
    'carlos.alberto@email.com',
    '1978-03-09'
  ),
  (
    'Fernanda Oliveira',
    '11977665544',
    '65498732100',
    'Feminino',
    'fernanda.oliveira@email.com',
    '2000-01-20'
  ),
  (
    'Rafael Lima',
    '21991239876',
    '11223344556',
    'Masculino',
    'rafael.lima@email.com',
    '1992-08-05'
  ),
  (
    'Juliana Martins',
    '11992345678',
    '66778899001',
    'Feminino',
    'juliana.martins@email.com',
    '1988-02-17'
  ),
  (
    'Bruno Henrique',
    '31993456789',
    '77889900112',
    'Masculino',
    'bruno.henrique@email.com',
    '1995-10-30'
  ),
  (
    'Patrícia Souza',
    '11996543210',
    '88990011223',
    'Feminino',
    'patricia.souza@email.com',
    '1991-06-12'
  ),
  (
    'Lucas Fernandes',
    '21997885643',
    '99001122334',
    'Masculino',
    'lucas.fernandes@email.com',
    '1996-04-27'
  );

CREATE TABLE
  denuncias (
    idDenuncia int primary key auto_increment,
    endereco varchar(150) not null,
    Bairro varchar(50) not null,
    descricao text not null,
    imgUrl varchar(255) not null,
    cidade varchar(50) not null,
    CEP varchar(10) not null,
    Complemento varchar(10),
    idUsuario int,
    FOREIGN KEY (idUsuario) REFERENCES Usuario (idUsuario)
  );

INSERT INTO
  denuncias (
    endereco,
    Bairro,
    descricao,
    imgUrl,
    CEP,
    Complemento,
    idUsuario
  )
VALUES
  (
    'Rua das Ruínas, 13',
    'Decadência',
    'Montanha de entulho bloqueando a entrada da rua.',
    '',
    '99999-999',
    'Porão',
    1
  ),
  (
    'Av. do Colapso, 666',
    'Desespero',
    'Falta de iluminação pública há meses.',
    '',
    '88888-888',
    'Barraco 2',
    2
  ),
  (
    'Travessa da Lamentação, 404',
    'Esquecidos',
    'Fiação caída na calçada, risco para pedestres.',
    '',
    '77777-777',
    'Casa dos Fundos',
    3
  ),
  (
    'Rua do Abandono, 0',
    'Poço Fundo',
    'Valas abertas sem sinalização na rua inteira.',
    '',
    '66666-666',
    'Térreo',
    4
  ),
  (
    'Viela do Fim, 99',
    'Ilusão Perdida',
    'Árvore caída bloqueando a passagem há dias.',
    '',
    '55555-555',
    'Container 1',
    5
  ),
  (
    'Beco do Retrocesso, 7',
    'Contramão',
    'Pavimento completamente esfarelado e intransitável.',
    '',
    '44444-444',
    'Kitnet 3',
    6
  ),
  (
    'Alameda das Sombras, 1313',
    'Penumbra',
    'Ruas sem iluminação há semanas, casos de assalto aumentando.',
    '',
    '33333-333',
    'Bloco C',
    7
  ),
  (
    'Rua da Insegurança, 22',
    'Cracolândia Vip',
    'Presença constante de usuários de drogas em frente a escola.',
    '',
    '22222-222',
    'Apto 302',
    8
  ),
  (
    'Av. da Derrota, 171',
    'Fracasso',
    'Sem coleta de lixo há mais de 10 dias.',
    '',
    '11111-111',
    'Sala 13',
    9
  ),
  (
    'Travessa do Medo, s/n',
    'Labirinto',
    'Rua sem saída e sem manutenção, cheia de mato e ratos.',
    '',
    '00000-000',
    'Barraco de madeira',
    10
  );