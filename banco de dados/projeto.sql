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
  CPF varchar(50),
  telefone varchar(50),
  nasciData date,
  endereco varchar(150) not null,
  bairro varchar(50) not null,
  descricao text not null,
  imgUrl varchar(255) not null,
  CEP varchar(10) not null,
  complemento varchar(10)
);

INSERT INTO denuncia (nome, email, CPF, telefone, nasciData, endereco, bairro, descricao, imgUrl, CEP, complemento)
VALUES 
('João Silva', 'joao.silva@example.com', 12345678900, 11987654321, '1990-05-12', 'Rua das Flores, 123', 'Centro', 'Lixo acumulado em terreno baldio.', 'uploads/lixo1.jpg', '01234-567', 'Casa 1'),

('Maria Oliveira', 'maria.oliveira@example.com', 98765432100, 21987654321, '1985-10-30', 'Av. Brasil, 456', 'Jardim das Palmeiras', 'Esgoto a céu aberto próximo a escola.', 'uploads/esgoto.jpg', '76543-210', 'Ap 202'),

('Carlos Souza', 'carlos.souza@example.com', 11223344556, 31912345678, '1978-03-22', 'Travessa dos Lírios, 89', 'Vila Nova', 'Árvore caída obstruindo a rua.', 'uploads/arvore.jpg', '09876-543', ''),

('Ana Martins', 'ana.martins@example.com', 66778899001, 47987651234, '1995-07-08', 'Rua do Sol, 789', 'São Pedro', 'Vazamento de água em calçada pública.', 'uploads/vazamento.jpg', '12345-678', NULL),

('Felipe Lima', 'felipe.lima@example.com', 33445566778, 51999887766, '2000-11-19', 'Alameda Santos, 321', 'Boa Vista', 'Moradores fazendo queima de lixo.', 'uploads/queima.jpg', '98765-432', 'Fundos');

drop database sistemaDenuncias;

select * from denuncia;

alter table denuncia 
modify column CPF bigint,
modify column telefone bigint;

