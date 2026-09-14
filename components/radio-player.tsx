"use client";

import { useEffect, useRef, useState } from "react";

type RadioPlayerProps = {
  streamUrl: string;
  title: string;
  artist: string;
};

function PlayIcon({ playing }: { playing: boolean }) {
  return playing ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 5 11 7-11 7z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4zm11.5 1.2v3.6a3 3 0 0 0 0-3.6zm0-4.4v2.1a5.5 5.5 0 0 1 0 8.2v2.1a7.5 7.5 0 0 0 0-12.4z" />
    </svg>
  );
}

export default function RadioPlayer({
  streamUrl,
  title,
  artist,
}: RadioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [message, setMessage] = useState(
    streamUrl ? "AO VIVO" : "STREAM EM CONFIGURAÇÃO",
  );

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !streamUrl) {
      setMessage("ADICIONE A URL DO STREAM NA VERCEL");
      return;
    }

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
        setMessage("AO VIVO");
      } else {
        audio.load();
        await audio.play();
        setPlaying(true);
        setMessage("TOCANDO AGORA");
      }
    } catch {
      setPlaying(false);
      setMessage("NÃO FOI POSSÍVEL CONECTAR");
    }
  }

  return (
    <aside className="radio-player" aria-label="Player da Rotas America FM">
      <audio
        ref={audioRef}
        src={streamUrl || undefined}
        preload="none"
        onPause={() => setPlaying(false)}
        onPlaying={() => setPlaying(true)}
        onError={() => {
          setPlaying(false);
          if (streamUrl) setMessage("SINAL TEMPORARIAMENTE INDISPONÍVEL");
        }}
      />

      <div className="player-inner">
        <button
          className="player-play"
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pausar rádio" : "Ouvir rádio"}
          disabled={!streamUrl}
          title={
            streamUrl
              ? playing
                ? "Pausar"
                : "Ouvir ao vivo"
              : "Configure NEXT_PUBLIC_STREAM_URL"
          }
        >
          <PlayIcon playing={playing} />
        </button>

        <div className={"player-signal" + (playing ? " is-playing" : "")}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="player-copy">
          <span className="player-live">
            <i />
            {message}
          </span>
          <strong>{title}</strong>
          <small>{artist}</small>
        </div>

        <div className="player-volume">
          <VolumeIcon />
          <input
            aria-label="Volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
          />
        </div>

        <button
          type="button"
          className="player-cta"
          onClick={togglePlayback}
          disabled={!streamUrl}
        >
          {streamUrl ? (playing ? "Pausar" : "Ouvir agora") : "Em breve"}
        </button>
      </div>
    </aside>
  );
}
