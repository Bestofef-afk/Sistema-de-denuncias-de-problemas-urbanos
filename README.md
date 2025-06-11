# Sistema de Reporte de Ocorrências Urbanas

## 📌 Descrição do Projeto

O **Sistema de Reporte de Ocorrências Urbanas** foi desenvolvido para facilitar a comunicação entre os cidadãos de Vila Nova do Norte e a administração pública municipal. A plataforma permite o registro de problemas urbanos como buracos em vias, entulho acumulado, falhas na iluminação pública, mato alto, entre outros.

O sistema possibilita:
- Descrição detalhada das ocorrências;
- Anexo de fotografias;
- Marcação da localização exata via geolocalização.

Esse registro centralizado permite à gestão pública organizar, priorizar e resolver demandas de maneira mais eficiente, melhorando a infraestrutura urbana e a qualidade de vida da população.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Banco de Dados:** PostgreSQL  
- **API:** RESTful  
- **Autenticação:** JWT (JSON Web Token)  
- **Hospedagem:** AWS (Amazon Web Services)  

🔍 *As tecnologias foram escolhidas visando escalabilidade, segurança, modularidade e facilidade de manutenção.*

## 🗂️ Modelagem de Dados

### Principais Entidades:

- **Usuário (`Usuario`)**
  - id, nome, email, senha (hash), data_cadastro
- **Ocorrência (`Ocorrencia`)**
  - id, descrição, foto_url, localizacao (latitude/longitude), status_id, tipo_id, usuario_id, data_criacao
- **Tipo de Ocorrência (`TipoDeOcorrencia`)**
  - id, nome
- **Status da Ocorrência (`StatusOcorrencia`)**
  - id, status (Ex: Pendente, Em Andamento, Resolvido)
- **Comentário (`Comentario`)**
  - id, texto, usuario_id, ocorrencia_id, data_criacao

🔗 *Relacionamentos*:  
- Um `Usuario` pode registrar várias `Ocorrencias`.  
- Cada `Ocorrencia` possui um `TipoDeOcorrencia` e um `StatusOcorrencia`.  
- Uma `Ocorrencia` pode ter vários `Comentarios`.

## 🔗 Rotas da API

### Autenticação
- `POST /auth/login` - Autentica o usuário e gera token.
- `POST /auth/register` - Registra um novo usuário.

### Ocorrências
- `GET /ocorrencias` - Lista todas as ocorrências (filtros opcionais: status, tipo, data).
- `POST /ocorrencias` - Registra nova ocorrência.
- `GET /ocorrencias/{id}` - Detalhes de uma ocorrência específica.
- `PUT /ocorrencias/{id}` - Atualiza ocorrência (ex.: alterar status, adicionar comentário).
- `DELETE /ocorrencias/{id}` - Remove ocorrência (se permitido).

### Tipos de Ocorrência
- `GET /tipos-ocorrencia` - Lista os tipos de ocorrência disponíveis.

### Usuários
- `GET /usuarios/me` - Dados do usuário logado.
- `PUT /usuarios/me` - Atualiza dados do usuário logado.

## 🖼️ Telas Principais

*(Inserir imagens reais ou mockups no repositório, na pasta `/docs/images/`)*

1. **Tela de Login**
2. **Formulário de Nova Ocorrência**
3. **Mapa de Ocorrências Registradas**
4. **Detalhes da Ocorrência**
5. **Painel do Gestor Público**

## 💡 Possíveis Melhorias Futuras

- Notificações push para atualização de status;
- Integração com sistema de equipes de campo;
- Dashboards gerenciais com relatórios detalhados;
- Gamificação para engajar cidadãos;
- Aplicativo móvel nativo (iOS/Android);
- API pública para desenvolvedores externos.

## 👥 Equipe de Desenvolvimento

Projeto desenvolvido pelos alunos do **SENAI Armando de Arruda Pereira** em parceria com a Prefeitura Municipal de Vila Nova do Norte.

## 🔗 Repositório no GitHub

[https://github.com/Bestofef-afk/Sistema-de-denuncias-de-problemas-urbanos](https://github.com/Bestofef-afk/Sistema-de-denuncias-de-problemas-urbanos)

## ⚙️ Instruções para Desenvolvedores

### Pré-requisitos:
- Node.js
- PostgreSQL
- npm/yarn

### Passos:
```bash
# Clone o repositório
git clone https://github.com/Bestofef-afk/Sistema-de-denuncias-de-problemas-urbanos.git

# Instale as dependências do backend
cd backend
npm install

# Configure as variáveis de ambiente (.env)

# Execute o servidor
npm start

# Instale e execute o frontend
cd ../frontend
npm install
npm start
