# 🛍️ FakeStore

FakeStore é um projeto de e-commerce fictício desenvolvido para fins de estudo e demonstração. Este projeto consome a [Fake Store API](https://fakestoreapi.com/docs) para simular uma loja online com produtos, categorias, carrinho e sistema de usuários.

---

## 📦 Funcionalidades

- 🔍 Listagem de produtos
- 🗂️ Filtros por categoria
- 🔎 Página de detalhes do produto
- 🛒 Carrinho de compras (adicionar, remover, atualizar quantidade)
- 👤 Simulação de autenticação de usuário
- 💳 Checkout (simulado)
- 📱 Layout responsivo

---

## 🚀 Tecnologias Utilizadas

- **Framework:** React
- **Linguagem:** TypeScript
- **API:** [Fake Store API](https://fakestoreapi.com/)
- **Gerenciamento de estado:** Redux
- **Estilização:** Styled Components
- **Outros:** Axios, React Query etc.

---

## 🔗 API Utilizada

**Fake Store API**  
API pública gratuita para simular e testar lojas virtuais.  
📄 [Documentação Oficial](https://fakestoreapi.com/docs)

**Principais endpoints:**
- `/products` – Lista todos os produtos
- `/products/categories` – Lista as categorias
- `/products/category/{category}` – Lista produtos de uma categoria
- `/products/{id}` – Detalhes de um produto
- `/carts` – Gerenciar carrinho
- `/users` – Gerenciar usuários (simulado)
- `/auth/login` – Login de usuário (simulado)

---

## 🔥 Como rodar o projeto

### 🧰 Pré-requisitos
- Node.js (v18 ou superior)
- npm, yarn ou pnpm instalado

### 📥 Clonando o projeto
```bash
git clone https://github.com/seu-usuario/fakestore.git
cd fakestore
```
### 📦 Instalando dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```
### 🚀 Rodando o projeto localmente
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
````
Acesse http://localhost:3000