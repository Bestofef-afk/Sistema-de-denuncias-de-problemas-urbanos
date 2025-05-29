Create Database sistemaDenuncias;

use sistemaDenuncias;

CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cargo VARCHAR(100),
    horarioInicio TIME,
    horarioFim TIME,
    localAtendimento VARCHAR(255),
    telefone VARCHAR(20),
    emailGovernamental VARCHAR(100),
    fotoUrl VARCHAR(100)
);

INSERT INTO funcionarios 
(nome, cargo, horarioInicio, horarioFim, localAtendimento, telefone, emailGovernamental, fotoUrl)
VALUES
('Ana Paula Souza', 'Secretária de Saúde', '08:00', '17:00', 'Av. da Prevenção, nº 100 – Prédio da Vacina', '(66) 99999-1234', 'ana.souza@vilanovanorte.gov', 'secretariaSaude.png'),
('Carlos Henrique Lima', 'Chefe de Gabinete', '07:30', '16:30', 'Rua dos Bastidores, nº 12 – Sala do Poder Oculto', '(66) 99800-0001', 'carlos.lima@vilanovanorte.gov', 'chefeGabinete.jpg'),
('Maria Fernanda Costa', 'Diretora de Educação', '08:00', '17:00', 'Rua do Giz, nº 45 – Prédio das Ideias', '(66) 99888-1122', 'maria.costa@vilanovanorte.gov', 'diretoraEducacao.jpg'),
('João Pedro Almeida', 'Engenheiro Civil', '07:00', '16:00', 'Av. das Obras, nº 999 – Bloco do Concreto', '(66) 99777-2233', 'joao.almeida@vilanovanorte.gov', 'engenheiroCivil.png'),
('Luciana Ribeiro', 'Assistente Social', '08:00', '17:00', 'Rua da Empatia, nº 202 – Casa do Coração Aberto', '(66) 99111-0000', 'luciana.ribeiro@vilanovanorte.gov', 'assistenteSocial.png'),
('Roberto Silva', 'Fiscal de Obras', '06:30', '15:30', 'Rua do Piso Torto, nº 13 – Fiscalização Total', '(66) 99666-4455', 'roberto.silva@vilanovanorte.gov', 'fiscalObra.jpg'),
('Beatriz Martins', 'Técnica de Enfermagem', '13:00', '22:00', 'Av. do Curativo, nº 88 – Sala da Agulhinha', '(66) 99555-6677', 'beatriz.martins@vilanovanorte.gov', 'tecnicaEnfermagem.jpg'),
('Eduardo Ramos', 'Motorista da Saúde', '06:00', '14:00', 'Rua dos Ônibus, nº 343 – Ponto Final da Saúde', '(66) 99100-1234', 'eduardo.ramos@vilanovanorte.gov', 'motoristaSaude.png'),
('Juliana Neves', 'Professora de Educação Infantil', '07:00', '12:00', 'Rua dos Pequenos Gênios, nº 10 – Sala do Giz Colorido', '(66) 99444-7788', 'juliana.neves@vilanovanorte.gov', 'professorainfantil.jpg'),
('Marcos Antônio Ferreira', 'Vigilante', '18:00', '06:00', 'Rua do Olho Vivo, nº 007 – Posto do Sussurro', '(66) 99333-8899', 'marcos.ferreira@vilanovanorte.gov', 'vigilante.png'),
('Vanessa Duarte', 'Recepcionista', '08:00', '17:00', 'Av. do Bom Dia, nº 1 – Balcão do Sorriso', '(66) 99123-4567', 'vanessa.duarte@vilanovanorte.gov', 'recepcionista.jpg'),
('André Luiz Barros', 'Contador', '07:00', '16:00', 'Rua da Calculadora, nº 123 – Prédio dos Números Certos', '(66) 99001-1111', 'andre.barros@vilanovanorte.gov', 'contador.png'),
('Patrícia Gomes', 'Coordenadora Pedagógica', '08:00', '17:00', 'Rua do Planejamento Escolar, nº 404 – Sala da Lousa Estratégica', '(66) 99777-3344', 'patricia.gomes@vilanovanorte.gov', 'coordenadora.jpg'),
('Diego Santos', 'Zelador', '06:00', '14:00', 'Rua da Vassoura, nº 33 – Cantinho do Capricho', '(66) 99400-0011', 'diego.santos@vilanovanorte.gov', 'zelador.png'),
('Sandra Mello', 'Psicóloga', '08:00', '17:00', 'Alameda da Mente, nº 222 – Consultório da Escuta Ativa', '(66) 99887-7654', 'sandra.mello@vilanovanorte.gov', 'psicologa.png'),
('Fábio Nascimento', 'Técnico de Informática', '07:30', '16:30', 'Av. do Wi-Fi, nº 404 – Sala do Reboot', '(66) 99111-2222', 'fabio.nascimento@vilanovanorte.gov', 'tecnicoinformatica.jpg'),
('Larissa Freitas', 'Arquiteta', '08:00', '17:00', 'Rua dos Projetos, nº 88 – Torre da Criatividade', '(66) 99222-3344', 'larissa.freitas@vilanovanorte.gov', 'arquiteta.png'),
('Henrique Castro', 'Agente de Fiscalização', '07:00', '16:00', 'Av. da Multa Justa, nº 300 – Posto do Apito', '(66) 99000-4455', 'henrique.castro@vilanovanorte.gov', 'agentefiscalizacao.png'),
('Tatiane Lima', 'Secretária Executiva', '08:00', '17:00', 'Rua dos Recados, nº 9 – Sala da Agenda Lotada', '(66) 99002-9999', 'tatiane.lima@vilanovanorte.gov', 'secretariaExecutiva.jpg'),
('Bruno Oliveira', 'Instrutor de Esportes', '13:00', '21:00', 'Av. do Esforço, nº 90 – Ginásio do Suor', '(66) 99888-1010', 'bruno.oliveira@vilanovanorte.gov', 'instrutorEsportes.png');

CREATE TABLE denuncia (
  idDenuncia int primary key auto_increment,
  nome varchar(50),
  email varchar(50),
  CPF varchar(50),
  telefone varchar(50),
  dataEnvio date,
  endereco varchar(150) not null,
  bairro varchar(50) not null,
  descricao text not null,
  imgUrl varchar(255) not null,
  CEP varchar(10) not null,
  complemento varchar(10)
);

INSERT INTO denuncia (nome, email, CPF, telefone, dataEnvio, endereco, bairro, descricao, imgUrl, CEP, complemento)
VALUES 
('João Silva', 'joao.silva@email.com', '123.456.789-00', '(11) 99999-1234', '2025-05-21', 'Rua das Flores, 123', 'Centro', 'Denúncia de descarte irregular de lixo.', 'uploads/imagem1.jpg', '12345678', 'Apt 101'),

('Maria Oliveira', 'maria.oliveira@email.com', '987.654.321-00', '(21) 98888-4321', '2025-05-20', 'Av. Brasil, 456', 'Jardins', 'Denúncia de poluição sonora constante.', 'uploads/imagem2.jpg', '87654321', 'Casa'),

('Carlos Souza', 'carlos.souza@email.com', '321.654.987-00', '(31) 97777-5678', '2025-05-19', 'Rua do Sol, 789', 'Vila Nova', 'Denúncia de maus tratos a animais.', 'uploads/imagem3.jpg', '11223344', 'Fundos');

drop database sistemaDenuncias;

select * from denuncia;

ALTER TABLE denuncia 
MODIFY COLUMN CPF VARCHAR(50),
MODIFY COLUMN telefone VARCHAR(50),
MODIFY COLUMN complemento VARCHAR(50);

INSERT INTO denuncia (nome, email, CPF, telefone, dataEnvio, endereco, bairro, descricao, imgUrl, CEP, complemento)
VALUES
('Fernanda Lima Costa', 'fernanda.lima@email.com', '32112345600', '(55) 99933-0007', '2025-05-21', 'Rua São Pedro, 321', 'Bairro Rosário', 'A praça do Bairro Rosário está com brinquedos quebrados, oferecendo risco às crianças. Alguns balanços estão soltos e há ferrugem em várias estruturas.', 'uploads/imagem7.jpg', '97385000', 'Praça São Pedro'),

('Bruno Henrique Duarte', 'bruno.duarte@email.com', '65498732100', '(55) 99922-0008', '2025-05-21', 'Avenida Sete de Setembro, 1010', 'Bairro Centro', 'Há um ponto de ônibus sem cobertura na Avenida Sete de Setembro. Passageiros ficam expostos ao sol e à chuva enquanto esperam o transporte público.', 'uploads/imagem8.jpg', '97340000', ''),

('Larissa Mendes Rocha', 'larissa.rocha@email.com', '78945612300', '(55) 99911-0009', '2025-05-21', 'Rua Dom Pedro II, 45', 'Bairro Industrial', 'Fios elétricos soltos próximos a postes na Rua Dom Pedro II têm gerado medo entre os moradores. O risco de choque é evidente.', 'uploads/imagem9.jpg', '96570000', ''),

('Tiago Silva Martins', 'tiago.martins@email.com', '14725836900', '(55) 99900-0010', '2025-05-21', 'Rua das Laranjeiras, 88', 'Bairro Bela Vista', 'O bueiro na Rua das Laranjeiras está entupido há semanas, causando alagamentos em dias de chuva forte.', 'uploads/imagem10.jpg', '97015000', 'Próximo ao número 90'),

('Isabela Ferreira Pinto', 'isabela.pinto@email.com', '96385274100', '(55) 98888-0011', '2025-05-21', 'Travessa do Comércio, 12', 'Bairro São José', 'Comércio abandonado virou ponto de uso de drogas e insegurança na Travessa do Comércio. Moradores relatam medo de passar pelo local à noite.', 'uploads/imagem11.jpg', '97200000', ''),

('Rodrigo Nunes Braga', 'rodrigo.braga@email.com', '85274196300', '(55) 98877-0012', '2025-05-21', 'Rua Benjamin Constant, 400', 'Bairro Passo do Verde', 'A ciclovia da Rua Benjamin Constant está completamente apagada. Sem pintura visível, motoristas invadem o espaço dos ciclistas.', 'uploads/imagem12.jpg', '97300000', '');

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);

INSERT INTO admin (email, senha) VALUES ('admin@site.com', '123456');	