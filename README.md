# 🚀 API REST de Produtos (Node.js & Express)

Este projeto é uma API REST funcional para o gerenciamento de produtos, desenvolvida como parte dos meus estudos em desenvolvimento Back-end. A aplicação simula um CRUD (Create, Read, Update, Delete) utilizando Node.js e o framework Express.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript.
* **Express**: Framework web para criação das rotas.
* **Nodemon**: Reinicialização automática do servidor durante o desenvolvimento.

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── servidor.js       # Configuração do Express e definição das rotas
│   └── bancoDeDados.js   # Lógica de persistência e manipulação dos dados
├── package.json          # Gerenciamento de dependências e scripts
├── .gitignore            # Arquivo para ignorar a pasta node_modules
└── README.md             # Documentação do projeto
```
## 📡 Endpoints
A API aceita requisições no formato `x-www-form-urlencoded`.

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| GET | `/produtos` | Retorna todos os produtos |
| GET | `/produtos/:id` | Retorna um produto específico |
| POST | `/produtos` | Adiciona um novo produto |
| PUT | `/produtos/:id` | Atualiza um produto existente |
| DELETE | `/produtos/:id` | Remove um produto |
