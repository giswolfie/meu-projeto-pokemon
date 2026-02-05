## **Desenvolvimento de site com integração de API.


**PokéPédia** é uma enciclopédia interativa que consome dados da [PokéAPI](https://pokeapi.co/). O objetivo do projeto foi criar uma aplicação performática, responsiva e bem estruturada, utilizando **React/Next.js** e boas práticas de desenvolvimento web.

A aplicação conta com uma **Landing Page** convidativa e responsiva, uma **Vitrine** paginada de Pokémons com a integração da API e uma página de **Detalhes Dinâmica** com estatísticas detalhadas do respectivo Pokemon.

## 🚀 Linguagens Utilizadas

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router);
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita e interfaces);
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (Estilização);
* **Integração:** Fetch API nativa;

## **Funcionalidades** 

- Landing Page
* Apresentação do projeto com hierarquia visual clara;
* Botão de chamada para ação (CTA) direcionando para a vitrine de pokemons;
* Design responsivo com background temático;

- Vitrine de Pokémons
* Consumo da API com paginação integrada;
* Botões de "Anterior" e "Próximo";
* Cards interativos com imagem e nome do Pokémon, além de botão de ação direto para a página de detalhes técnicos do Pokemon correspondente;
* Feedback visual de carregamento;

- Detalhes do Pokémon (Rota Dinâmica)
* Uso de **Rotas Dinâmicas** (`/vitrine/[id]`) para renderizar páginas únicas;
* Exibição de Status (HP, Attack, Defense) com barras de progresso visuais;
* Tipagem completa dos dados;
* Botão de navegação para retornar à vitrine de Pokemons;