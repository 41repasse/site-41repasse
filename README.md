# 41 Repasse — Página inicial

Site de página única (home) da 41 Repasse, feito em Next.js.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Publicar

1. Crie um repositório novo no GitHub e envie todo o conteúdo desta pasta.
2. Na Vercel (ou outro serviço compatível com Next.js), importe o repositório.
3. Mantenha as configurações padrão: comando de build `npm run build`.
4. Aponte o domínio `41repasse.com.br` para o novo projeto.

Se o site for publicado em outro domínio, defina a variável de ambiente
`SITE_URL` e ajuste os endereços em `app/layout.tsx`, `app/page.tsx` e
`components/JsonLd.tsx`.

## Onde alterar

- Seções da home: `components/home/`
- Menu: `components/Header.tsx`
- Rodapé: `components/Footer.tsx`
- Número do WhatsApp: `lib/whatsapp.ts`
- Google Tag Manager: `app/layout.tsx`
