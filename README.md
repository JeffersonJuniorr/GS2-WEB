# Tecnologias Utilizadas

React: Biblioteca JavaScript para a construção da interface do usuário.
React Router: Gerenciamento de rotas na aplicação.
Tailwind CSS: Estilização e responsividade.
Swiper: Biblioteca para criar carrosséis.
CryptoJS: Para criptografia de dados.
Fetch API: Para consumir os dados do back-end.
React Icons: Ícones usados na interface.
Autoplay e Pagination (Swiper): Para funcionalidades avançadas do carrossel.

# Funcionalidades

# 1. Páginas
Home:
Exibe um slideshow interativo de imagens e um resumo da proposta.
Utiliza o componente <Sobre />.

Solução:
Detalha o funcionamento do app e site. Inclui cartões explicativos, gráficos e alertas.

Sobre:
Página descritiva sobre o projeto e sua importância.

Login:
Permite autenticação de usuários com criptografia de senha utilizando CryptoJS.
Armazena o usuário autenticado em sessionStorage.

Cadastrar:
Formulário de cadastro para novos usuários.

Error (404):
Página exibida para rotas inválidas.

# 2. Componentes
Nav:
Barra de navegação com links para as páginas principais.

Footer:
Rodapé com informações adicionais.

DashboardCards:
Cards interativos exibindo informações detalhadas.

Mychart / Barchart:
Gráficos para visualização de dados de consumo energético.

# 3. Modal
Utilizado para as rotas de login e cadastro.
# 4. Simulação de API
O login utiliza fetch para acessar usuários cadastrados em um servidor local (http://localhost:5000/usuarios).


# Instalações Necessárias

React e React DOM (instalados automaticamente com o Vite):

React Router DOM:
npm install react-router-dom

Tailwind CSS (e ferramentas de build associadas):
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

Swiper (para carrossel):
npm install swiper

CryptoJS (para criptografia de dados):
npm install crypto-js

React Icons: 
npm install react-icons

# Como Executar o Projeto

Instale as dependências:

npm install
Configure o Tailwind CSS no arquivo tailwind.config.js conforme a sua estrutura de pastas.

Inicie o servidor de desenvolvimento:

npm run dev
Acesse o projeto no navegador em http://localhost:5173.


# Json Back End

Para que o cadastrar e login funcionem, abra o back end com:
json-server --watch db.json --port 5000