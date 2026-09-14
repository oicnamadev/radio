# Rotas America FM

Site oficial da **Rotas America FM**, criado em Next.js para publicação na Vercel.

> **A trilha sonora da sua estrada.**

## O que já está incluído

- Layout responsivo para computador, tablet e celular
- Player de rádio fixo na parte inferior
- URL do streaming configurável sem editar o código
- Destaque da transmissão e do programa atual
- Grade completa de programação
- Apresentação das equipes/locutores
- Formulário de pedidos musicais
- Integrações opcionais com Discord, Instagram e YouTube
- Identidade visual inspirada em estrada, rádio e Euro Truck
- SEO e compartilhamento em redes sociais
- Logo própria em SVG

## Publicar na Vercel

### Opção rápida

Use o botão abaixo e entre na sua conta da Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foicnamadev%2Fradio&project-name=rotas-america-fm&repository-name=rotas-america-fm)

### Importação manual

1. Acesse [vercel.com/new](https://vercel.com/new).
2. Conecte sua conta do GitHub.
3. Selecione o repositório **oicnamadev/radio**.
4. A Vercel identificará o projeto como **Next.js**.
5. Abra **Environment Variables** e cadastre as variáveis desejadas.
6. Clique em **Deploy**.

## Configuração da transmissão

No painel do projeto na Vercel, abra:

**Settings → Environment Variables**

Cadastre:

```env
NEXT_PUBLIC_STREAM_URL=https://seu-servidor.com/stream
```

O endereço precisa ser um link **direto do áudio** e deve usar **HTTPS**. Links de páginas de rádios não funcionam no elemento de áudio do navegador.

Serviços como AzuraCast, Icecast, Shoutcast e Zeno.FM normalmente fornecem esse link.

Após adicionar ou alterar uma variável, faça um novo deploy em:

**Deployments → Redeploy**

## Todas as variáveis disponíveis

| Variável | Finalidade | Obrigatória |
|---|---|---|
| `NEXT_PUBLIC_STREAM_URL` | Link HTTPS direto da transmissão | Para ativar o player |
| `NEXT_PUBLIC_DISCORD_URL` | Convite do Discord EuroAmerica Brasil | Não |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Perfil da rádio no Instagram | Não |
| `NEXT_PUBLIC_YOUTUBE_URL` | Canal da rádio no YouTube | Não |
| `NEXT_PUBLIC_REQUEST_URL` | WhatsApp, e-mail ou página para receber pedidos | Não |
| `NEXT_PUBLIC_NOW_PLAYING` | Nome do programa ou música exibida | Não |
| `NEXT_PUBLIC_NOW_ARTIST` | Locutor, artista ou descrição exibida | Não |

### Exemplo para pedidos pelo WhatsApp

```env
NEXT_PUBLIC_REQUEST_URL=https://wa.me/5511999999999
```

Use somente números, com código do país e DDD.

### Exemplo para pedidos por e-mail

```env
NEXT_PUBLIC_REQUEST_URL=mailto:radio@seudominio.com
```

## Rodar no computador

É necessário ter Node.js 20.9 ou superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Personalizar textos

Os principais conteúdos ficam em:

- `app/page.tsx`: programação, equipes e textos
- `app/globals.css`: cores, layout e animações
- `public/logo.svg`: logo vetorial
- `.env.example`: modelo das configurações

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- CSS responsivo sem dependências visuais externas

## Observação sobre o player

Navegadores bloqueiam reprodução automática com som. Por isso, o ouvinte precisa clicar em **Ouvir agora**. Esse comportamento é normal e mantém o projeto compatível com celulares e computadores.
