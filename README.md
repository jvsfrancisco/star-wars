# Star Wars Random Data Explorer

Este projeto foi desenvolvido como parte de um desafio técnico para consumir a [API de Star Wars](https://swapi.dev/). Ele apresenta informações aleatórias de categorias como filmes, personagens, planetas, espécies, naves estelares e veículos, tudo de forma randômica e estilizada. O projeto pode ser acessado [aqui](https://star-wars-self-six.vercel.app).

---

## 🖥️ Tecnologias Utilizadas

- **Vite**: Ferramenta para build rápida e eficiente.
- **React**: Biblioteca JavaScript para a criação de interfaces de usuário.
- **Styled Components**: Para estilização dinâmica e modular.
- **Axios**: Para requisições HTTP.

---

## 🚀 Funcionalidades

1. **Home Page**: Apresenta as categorias disponíveis para explorar.
2. **Páginas Dinâmicas**: Cada categoria possui sua própria página, exibindo informações randômicas.
3. **Consumo de API**: A API do Star Wars é consumida para exibir dados relevantes.
4. **Navegação Simples**: Botões intuitivos para gerar novas informações aleatórias.

---

## 📂 Estrutura de Pastas

```plaintext
src/
├── assets/        # Imagens e outros recursos estáticos
├── components/    # Componentes reutilizáveis da aplicação
├── pages/         # Páginas principais da aplicação
|   ├── Landing/   # Página inicial 
│   ├── Home/      # Página com as categorias
│   ├── Films/     # Página de filmes
│   ├── People/    # Página de personagens
│   ├── Planets/   # Página de planetas
│   ├── Species/   # Página de espécies
│   ├── Starships/ # Página de naves estelares
│   └── Vehicles/  # Página de veículos
├── styles/        # Arquivos de estilização global
├── hooks/         # Hooks personalizados
├── services/      # Configuração de consumo da API (Axios)
├── App.jsx        # Componente principal da aplicação
└── main.jsx       # Ponto de entrada da aplicação
```
### 🛠️ Como Clonar o Projeto

Siga os passos abaixo para clonar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/jvsfrancisco/star-wars
    ```
2. **Acesse a pasta do projeto**:
    ```bash
    cd star-wars
    ```
3. **Instale as dependências**:
    ```bash
    npm install
    ```
4. **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
5. **Acesse o projeto no navegador**:
    ```plaintext
    http://localhost:5173
    ```
