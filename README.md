# README para Projeto de Backend em Node com TS: Sistema de Gerenciamento de Carros

## Sobre o Projeto

Este projeto é um sistema de backend desenvolvido em Node.js com TypeScript, voltado para o gerenciamento de carros, incluindo cadastro e listagem de veículos, gerenciamento de aluguéis e devoluções, e funcionalidades relacionadas à recuperação de senha dos usuários.

## Funcionalidades

- **Cadastro de Carro:** Permite o cadastro de novos carros, com validação de placa única e cadastro padrão em disponibilidade. Apenas usuários administradores podem cadastrar.
- **Listagem de Carros:** Listagem de carros disponíveis com filtros por categoria, marca ou nome. Disponível sem necessidade de login.
- **Cadastro de Especificação no Carro:** Adição de especificações a carros, restrito a veículos cadastrados e usuários administradores.
- **Cadastro de Imagens do Carro:** Possibilidade de adicionar imagens aos carros, usando multer para upload. Acesso restrito a administradores.
- **Aluguel de Carro:** Funcionalidade para cadastro de aluguéis com regras específicas de duração, disponibilidade e status do usuário.
- **Devolução de Carro:** Permite a devolução de carros alugados, com ajustes automáticos de status e cálculo de tarifas e multas.
- **Listagem de Alugueis para Usuário:** Usuários logados podem ver seus aluguéis.
- **Recuperação de Senha:** Recurso para recuperação de senha via e-mail com link de expiração.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express (gerenciamento de rotas)
- Multer (upload de arquivos)
- Outras dependências conforme necessidade do projeto.

## Instalação e Execução

### Pré-requisitos

- Node.js versão xx.xx
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone [url-do-repositorio]
   cd [nome-do-projeto]
    npm install
    # ou
    yarn install
   npm start
    # ou
    yarn start

## Contribuições

Para contribuir, siga os passos habituais de fork, criação de branch, commit e pull request.
