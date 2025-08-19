# Rick and Morty - Buscador de Personagens

Este é um projeto simples de front-end que utiliza a [API Rick and Morty](https://rickandmortyapi.com/) para buscar e exibir informações sobre personagens da série. O usuário pode inserir um ID de personagem para ver seus detalhes, como imagem, nome, status, espécie e localização.

![Logo do Rick and Morty](https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ab553cdc-e15d-4597-b65f-bec9201fd2dd/63cf6c90-3837-11f0-8dd2-0affeb02d451?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=1000)

## 🚀 Funcionalidades

- **Busca por ID:** Encontre qualquer personagem da série informando seu número de identificação.
- **Exibição de Detalhes:** Veja as principais informações do personagem, incluindo:
  - Imagem
  - ID
  - Nome
  - Gênero
  - Status (Vivo, Morto, etc.)
  - Espécie
  - Planeta de Origem
  - Última Localização Conhecida
- **Interface Temática:** Layout estilizado com um fundo animado e cores que remetem ao universo de Rick and Morty.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrão:

- **HTML5:** Para a estrutura e semântica da página.
- **CSS3:** Para a estilização, utilizando Flexbox para o layout.
- **JavaScript (ES6+):** Para a interatividade, manipulação do DOM e consumo da API.
- **Fetch API:** Para realizar as requisições `HTTP` de forma assíncrona (`async/await`).
- **Rick and Morty API:** Como fonte de dados dos personagens.

## ⚙️ Como Executar o Projeto

Como este é um projeto estático (apenas front-end), você não precisa de um servidor ou de processos de build complexos. Basta seguir os passos:

1.  **Clone o repositório** para a sua máquina local:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Navegue até a pasta** do projeto:
    ```bash
    cd apiRickMorty
    ```
3.  **Abra o arquivo `index.html`** no seu navegador de preferência. Você pode fazer isso clicando duas vezes no arquivo.

## 📖 Como Usar

1.  Ao abrir a página, você verá um campo de texto com o título "Digite um número para ver o personagem".
2.  Insira o ID do personagem que deseja pesquisar (por exemplo, `1` para Rick Sanchez ou `2` para Morty Smith).
3.  Clique no botão **"Ver personagem"**.
4.  Aguarde um instante e as informações e a imagem do personagem serão exibidas na tela.

## 📂 Estrutura dos Arquivos

```
.
├── index.html          # Arquivo principal com a estrutura da página.
├── script/
│   └── index.js        # Contém toda a lógica JavaScript para a API e manipulação do DOM.
├── style/
│   └── style.css       # Folha de estilos para a aparência visual do projeto.
└── public/
    └── ...             # Pasta para imagens e outros assets, como o GIF de fundo.
```

---

Feito com ❤️ por um fã de Rick and Morty.
