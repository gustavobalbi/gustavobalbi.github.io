# Portfólio: Gustavo Balbi Queiroz

Site pessoal em React + Vite, bilíngue (PT/EN).

## Rodar localmente

```bash
npm install
npm run dev
```

## Editar textos

Todos os textos ficam em `src/content.js` (um bloco `pt` e um `en`). Links de e-mail, GitHub e LinkedIn ficam no topo do mesmo arquivo.

## Adicionar o CV

1. Coloque os PDFs em `public/cv/` (ex.: `gustavo-balbi-cv-pt.pdf` e `gustavo-balbi-cv-en.pdf`).
2. Em `src/content.js`, preencha `hero.cvFile` em cada idioma com o caminho (ex.: `"/cv/gustavo-balbi-cv-pt.pdf"`).
O botão "Baixar CV" só aparece quando esse campo está preenchido.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel, clique em "Add New Project" e importe o repositório.
3. A Vercel detecta o Vite sozinha (build `npm run build`, saída `dist`). Clique em Deploy.
