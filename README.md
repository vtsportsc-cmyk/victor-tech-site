# Victor.Tech — novo site (Next.js + CSS puro)

Releitura completa do site ([victortech1.vercel.app](https://victortech1.vercel.app/)) em um estilo
**cinematográfico molten/editorial** — fundo preto com veios de lava, tipografia serifada de alto
impacto e um toque cyan de tecnologia.

Este projeto gera **HTML estático** (`output: "export"`), ou seja: roda em qualquer hospedagem
estática (Vercel, Netlify, GitHub Pages, S3…) sem precisar de servidor Node em produção.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção (gera a pasta `out/`):

```bash
npm run build
```

## Publicar na Vercel

O site foi pensado para viver **neste diretório** (`victor-tech-site/`). Para publicar:

1. Importe o repositório na Vercel.
2. Em **Project → Settings → General → Root Directory**, aponte para `victor-tech-site`.
   A Vercel detecta Next.js automaticamente — não precisa configurar build command nem output.
3. (Opcional) Em **Settings → Environment Variables**, defina:
   - `NEXT_PUBLIC_SITE_URL` = `https://victortech1.vercel.app` (ou o seu domínio final)
   - **Não** defina `NEXT_PUBLIC_BASE_PATH` (na Vercel o site serve na raiz).
4. Deploy. A cada `git push` a Vercel reconstrói automaticamente.

> Se você já tem o projeto `portifolio` na Vercel publicando o site antigo a partir da raiz,
> o mais limpo é criar um **novo projeto** com Root Directory = `victor-tech-site` e apontar o
> domínio `victortech1.vercel.app` para ele.

### .env

Copie `.env.example` para `.env.local` se quiser sobrescrever valores localmente:

```bash
cp .env.example .env.local
```

## Editar o conteúdo

Tudo fica em arquivos de texto:

- `app/content.ts` — nome, bio, serviços, estatísticas, FAQ, contatos, projetos.
- `app/posts.ts` — os artigos do blog.
- `app/globals.css` — todas as cores e o estilo visual.

## O que já está aqui

- **Hero** com plasma de lava vivo (canvas) e caixa de prompt que digita exemplos.
- **Stats animados** (+320%, 150+, 99.9%, <1.5s, 3x+).
- **Diferenciais, Processo em 7 dias** (cards em leque), **IA & Automação** (WhatsApp, Telegram, IA custom).
- **Simulação de conversa no WhatsApp** e o **Simulador de Faturamento** interativo.
- **Portfólio** (VWK Trader, Apex Law, FitPulse) com páginas de detalhe.
- **Blog** com artigos, páginas `/sobre`, `/blog`, `/projetos/*`, `sitemap.xml` e `robots.txt`.
- Assistente flutuante **N.E.X.U.S.** e botão de WhatsApp.
- **SEO**: canonical, Open Graph, Twitter Card e dados estruturados (JSON-LD).

Os CTAs apontam para o WhatsApp `(21) 98721-5550`.

## Domínio próprio

1. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final (Vercel → Environment Variables).
2. Aponte o domínio no painel da Vercel. O `basePath` fica vazio (raiz), então nada mais muda.

## Publicar no GitHub Pages (alternativa)

O workflow em `.github/workflows/deploy.yml` publica no GitHub Pages em subpasta. Nesse caso ele
define `NEXT_PUBLIC_BASE_PATH=/victor-tech-site`. Se não for usar GitHub Pages, pode remover esse
workflow — ele é ignorado pela Vercel.
