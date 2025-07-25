
# Mini Blog com React e Sanity

Este projeto é um mini blog criado para fins de aprendizado e experimentação com o **Sanity** como CMS (Content Management System) e **React** no frontend. O objetivo principal é entender a integração entre Sanity e React, trabalhando com dados estruturados, consultas GROQ, e exibição dinâmica de conteúdo em uma SPA moderna.

---

## Funcionalidades

- Exibição de posts dinâmicos buscados via Sanity CMS.
- Página individual de post com conteúdo rico formatado usando Portable Text.
- Autores vinculados aos posts com foto e breve biografia.
- SEO básico implementado com React Helmet.
- Layout responsivo, moderno e clean com Material-UI (MUI).
- Paginação simples na página inicial para navegação entre posts.

---

## Tecnologias Utilizadas

- **React** (Create React App)
- **Sanity CMS** para gerenciamento de conteúdo
- **Material-UI (MUI)** para componentes e estilo
- **React Router** para navegação
- **React Helmet** para SEO
- **Portable Text** para renderização de conteúdo rico do Sanity

---

## Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (`.env`) com as credenciais do seu projeto Sanity, como `REACT_APP_SANITY_PROJECT_ID` e `REACT_APP_SANITY_DATASET`.

4. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm start
   ```

5. Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## Estrutura do Projeto

- `/src/components` - Componentes React reutilizáveis, como `PostCard`, `Layout`, etc.
- `/src/pages` - Páginas principais da aplicação (`Home`, `PostPage`).
- `/src/sanityClient.js` - Configuração do cliente Sanity para consultas.
- `/public` - Arquivos estáticos.
- `.env` - Variáveis de ambiente para conexão segura com Sanity.

---

## Deploy

- **Frontend:** Pode ser hospedado no Netlify, Vercel ou outro serviço de hospedagem para SPA.
- **CMS:** Sanity é um serviço gerenciado na nuvem, não necessita deploy próprio, basta usar o Studio Sanity para criar e editar conteúdo.

---

## Como criar posts

Use o [Sanity Studio](https://www.sanity.io/studio) para criar, editar e publicar posts. O conteúdo criado será automaticamente refletido na aplicação via API do Sanity.

---

## Aprendizado

Este projeto serve como um laboratório para:

- Explorar o poder do Sanity CMS e sua linguagem de consulta GROQ.
- Entender como consumir APIs headless CMS em React.
- Praticar boas práticas de UI/UX com MUI.
- Trabalhar SEO básico com React Helmet.
- Construir um blog simples mas funcional com navegação, paginação e layouts responsivos.

---

## Referências

- [Sanity Documentation](https://www.sanity.io/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/)
- [React Helmet](https://github.com/nfl/react-helmet)

---

## Contato

Desenvolvido por Moacir David.  
Para dúvidas, sugestões ou colaborações, entre em contato!

---

Obrigado por visitar este projeto! 🚀📚
