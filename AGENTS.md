# AGENTS.md

Contexto base para agentes de IA que trabalham neste repositório.

## Sobre o projeto

- **clone-tabnews-ia**: clone do [TabNews](https://www.tabnews.com.br) desenvolvido durante o curso de IA do [curso.dev](https://curso.dev).
- O projeto está no início e vai evoluir bastante. Antes de mudar algo, leia o código atual em vez de presumir a estrutura.
- Repositório: https://github.com/faadias/clone-tabnews-ia (branch principal: `main`).

## Stack

- **Next.js** com **App Router** (pasta `app/`).
- **React**.
- **JavaScript** (sem TypeScript, a menos que seja adotado explicitamente).
- Gerenciador de pacotes: **npm** (use `package-lock.json`; não misture com yarn/pnpm).

## Comandos

- `npm install`: instala as dependências.
- `npm run dev`: servidor de desenvolvimento (http://localhost:3000).
- `npm run build`: build de produção.
- `npm run start`: roda o build de produção.

## Convenções

- Idioma: português do Brasil (pt-BR) para textos da interface, comentários, mensagens de commit e documentação.
- Siga as convenções atuais e oficiais do Next.js (App Router, Server Components por padrão, `"use client"` apenas quando houver interatividade ou APIs do navegador).
- Prefira a solução mais simples, com o mínimo de código e de dependências necessário.
- Não faça commit nem push sem pedido explícito.

## Ambiente

- O desenvolvimento acontece em um GitHub Codespace. Portas expostas ficam acessíveis em `https://<nome-do-codespace>-<porta>.app.github.dev`.
