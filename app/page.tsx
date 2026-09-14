import RadioPlayer from "@/components/radio-player";
import RequestForm from "@/components/request-form";

const programs = [
  {
    time: "05:00 — 09:00",
    title: "Café na Estrada",
    description:
      "Música leve, notícias rápidas e energia para começar a primeira rota do dia.",
    accent: "orange",
  },
  {
    time: "09:00 — 12:00",
    title: "Rota Brasil",
    description:
      "Os sucessos nacionais que atravessam estados e acompanham quem está no volante.",
    accent: "blue",
  },
  {
    time: "12:00 — 14:00",
    title: "Parada do Almoço",
    description:
      "Uma pausa bem acompanhada com pedidos dos ouvintes e clássicos que todo mundo canta.",
    accent: "gold",
  },
  {
    time: "14:00 — 18:00",
    title: "Giro América",
    description:
      "Hits internacionais, novidades e uma seleção para manter a viagem em movimento.",
    accent: "red",
  },
  {
    time: "18:00 — 21:00",
    title: "Comboio do Fim de Tarde",
    description:
      "A resenha da comunidade, recados da estrada e a trilha certa para viajar com os amigos.",
    accent: "purple",
  },
  {
    time: "21:00 — 00:00",
    title: "Luzes da Rodovia",
    description:
      "Uma seleção especial para dirigir à noite, relaxar e deixar a estrada fluir.",
    accent: "cyan",
  },
];

const presenters = [
  {
    initials: "MR",
    role: "MANHÃ",
    name: "Equipe Manhã na Rota",
    description: "Bom humor, informação e música para colocar o dia em movimento.",
  },
  {
    initials: "GA",
    role: "TARDE",
    name: "Equipe Giro América",
    description: "Uma viagem musical entre o Brasil, a América e a Europa.",
  },
  {
    initials: "CN",
    role: "NOITE",
    name: "Equipe Comboio Noturno",
    description: "Companhia para as longas rotas e para a resenha entre amigos.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function RadioWavesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9.2 9.2 0 0 0 0 13M18.5 5.5a9.2 9.2 0 0 1 0 13" />
    </svg>
  );
}

export default function Home() {
  const streamUrl = process.env.NEXT_PUBLIC_STREAM_URL ?? "";
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL ?? "";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "";
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "";
  const requestUrl = process.env.NEXT_PUBLIC_REQUEST_URL ?? "";
  const nowPlaying =
    process.env.NEXT_PUBLIC_NOW_PLAYING ?? "Rotas America FM";
  const nowArtist =
    process.env.NEXT_PUBLIC_NOW_ARTIST ?? "A trilha sonora da sua estrada";

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Rotas America FM">
            <img src="/logo.svg" alt="" width="54" height="54" />
            <span>
              <strong>ROTAS AMERICA</strong>
              <small>FM</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#programacao">Programação</a>
            <a href="#equipe">Equipe</a>
            <a href="#pedido">Peça sua música</a>
          </nav>

          <a
            className="header-live"
            href={streamUrl ? "#ouca" : "#configuracao"}
          >
            <i />
            {streamUrl ? "NO AR" : "EM BREVE"}
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="mountains mountains-back" aria-hidden="true" />
          <div className="mountains mountains-front" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">
                <RadioWavesIcon />
                UMA RÁDIO FEITA PARA QUEM VIVE NA ROTA
              </span>

              <h1>
                A trilha sonora
                <span>da sua estrada.</span>
              </h1>

              <p>
                Música, companhia e boas histórias para transformar cada viagem
                em um novo destino. Do Brasil para o mundo, sempre com você.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#ouca">
                  <span>Ouvir agora</span>
                  <ArrowIcon />
                </a>
                <a className="text-button" href="#programacao">
                  Ver programação
                </a>
              </div>

              <div className="hero-tags">
                <span>🇧🇷 Brasil</span>
                <i />
                <span>🌎 América</span>
                <i />
                <span>🇪🇺 Europa</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Ilustração de estrada">
              <div className="frequency">
                <small>SINTONIZE</small>
                <strong>ROTA</strong>
                <span>ONLINE</span>
              </div>
              <div className="signal-rings">
                <i />
                <i />
                <i />
              </div>
              <div className="moon" />
              <div className="road">
                <span className="road-line road-line-one" />
                <span className="road-line road-line-two" />
                <span className="road-line road-line-three" />
              </div>
              <div className="truck">
                <div className="truck-box" />
                <div className="truck-cab">
                  <i />
                </div>
                <span className="wheel wheel-one" />
                <span className="wheel wheel-two" />
              </div>
            </div>
          </div>
        </section>

        <section className="on-air-section" id="ouca">
          <div className="container">
            <div className="on-air-card">
              <div className="on-air-badge">
                <img src="/logo.svg" alt="Logo Rotas America FM" />
                <span className="vinyl-ring" />
              </div>

              <div className="on-air-content">
                <span className="live-label">
                  <i />
                  {streamUrl ? "AO VIVO AGORA" : "TRANSMISSÃO EM CONFIGURAÇÃO"}
                </span>
                <h2>{nowPlaying}</h2>
                <p>{nowArtist}</p>

                <div className="sound-bars" aria-hidden="true">
                  {Array.from({ length: 32 }).map((_, index) => (
                    <i key={index} style={{ animationDelay: `${index * 40}ms` }} />
                  ))}
                </div>
              </div>

              <a
                className={"round-play" + (!streamUrl ? " is-disabled" : "")}
                href="#player"
                aria-label={streamUrl ? "Abrir player" : "Stream em configuração"}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m8 5 11 7-11 7z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container section-split">
            <div>
              <span className="section-kicker">NOSSA FREQUÊNCIA É A ESTRADA</span>
              <h2 className="section-title">
                Uma companhia para
                <span>cada quilômetro.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                A Rotas America FM nasceu para conectar quem ama música, estrada
                e boas amizades. Uma rádio online integrada à comunidade
                EuroAmerica Brasil, com programação pensada para viagens,
                comboios e momentos de descanso.
              </p>
              <div className="about-points">
                <span><b>01</b> Música para todos os caminhos</span>
                <span><b>02</b> Participação dos ouvintes</span>
                <span><b>03</b> Comunidade na mesma sintonia</span>
              </div>
            </div>
          </div>
        </section>

        <section className="schedule-section" id="programacao">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">DE SEGUNDA A SEXTA</span>
                <h2 className="section-title">Sua rota, nossa programação.</h2>
              </div>
              <p>
                Uma seleção pensada para acompanhar cada momento do seu dia.
              </p>
            </div>

            <div className="schedule-grid">
              {programs.map((program, index) => (
                <article
                  className={`program-card accent-${program.accent}`}
                  key={program.title}
                >
                  <div className="program-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <time>{program.time}</time>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <span className="program-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section" id="equipe">
          <div className="container">
            <div className="section-heading compact">
              <div>
                <span className="section-kicker">QUEM ESTÁ NO MICROFONE</span>
                <h2 className="section-title">A voz que viaja com você.</h2>
              </div>
            </div>

            <div className="team-grid">
              {presenters.map((presenter) => (
                <article className="team-card" key={presenter.role}>
                  <div className="avatar">
                    <span>{presenter.initials}</span>
                    <i />
                  </div>
                  <small>{presenter.role}</small>
                  <h3>{presenter.name}</h3>
                  <p>{presenter.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="request-section" id="pedido">
          <div className="request-road" aria-hidden="true" />
          <div className="container request-grid">
            <div className="request-copy">
              <span className="section-kicker">VOCÊ ESCOLHE A PRÓXIMA</span>
              <h2>
                Qual música vai
                <span>pegar a estrada?</span>
              </h2>
              <p>
                Mande seu pedido, diga de onde está ouvindo e faça parte da
                programação da Rotas America FM.
              </p>
              <div className="request-note">
                <RadioWavesIcon />
                <span>
                  <strong>Alô, motorista!</strong>
                  Seu pedido pode ser anunciado durante a programação.
                </span>
              </div>
            </div>

            <RequestForm requestUrl={requestUrl} />
          </div>
        </section>

        <section className="community-section">
          <div className="container community-card">
            <div>
              <span className="section-kicker">EUROAMERICA BRASIL</span>
              <h2>Entre para o nosso comboio.</h2>
              <p>
                Compartilhe rotas, organize viagens e viva a estrada com uma
                comunidade feita por amigos.
              </p>
            </div>
            <a
              className="primary-button"
              href={discordUrl || "#pedido"}
              target={discordUrl ? "_blank" : undefined}
              rel={discordUrl ? "noreferrer" : undefined}
            >
              <span>{discordUrl ? "Entrar no Discord" : "Discord em breve"}</span>
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="config-section" id="configuracao">
          <div className="container config-card">
            <span className="config-icon">⚙</span>
            <div>
              <small>PRONTO PARA PUBLICAR</small>
              <h2>Conecte sua transmissão quando quiser.</h2>
              <p>
                O site já está preparado. Basta adicionar a variável
                <code>NEXT_PUBLIC_STREAM_URL</code> nas configurações da Vercel
                usando um endereço HTTPS direto do seu serviço de streaming.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#inicio">
            <img src="/logo.svg" alt="" width="62" height="62" />
            <span>
              <strong>ROTAS AMERICA</strong>
              <small>FM</small>
            </span>
          </a>

          <p>
            Música, estrada e amizade.
            <br />
            <strong>A trilha sonora da sua estrada.</strong>
          </p>

          <div className="social-links">
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
            {youtubeUrl && (
              <a href={youtubeUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>
            )}
            {discordUrl && (
              <a href={discordUrl} target="_blank" rel="noreferrer">
                Discord
              </a>
            )}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Rotas America FM</span>
          <span>Uma rádio EuroAmerica Brasil</span>
        </div>
      </footer>

      <div id="player">
        <RadioPlayer
          streamUrl={streamUrl}
          title={nowPlaying}
          artist={nowArtist}
        />
      </div>
    </>
  );
}
