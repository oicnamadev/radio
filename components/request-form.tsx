"use client";

import { FormEvent, useState } from "react";

type RequestFormProps = {
  requestUrl: string;
};

export default function RequestForm({ requestUrl }: RequestFormProps) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const city = String(form.get("city") || "");
    const song = String(form.get("song") || "");
    const artist = String(form.get("artist") || "");

    const text = [
      "🎵 Pedido musical — Rotas America FM",
      `Nome: ${name}`,
      `Cidade: ${city}`,
      `Música: ${song}`,
      `Artista: ${artist}`,
    ].join("\n");

    if (!requestUrl) {
      try {
        await navigator.clipboard.writeText(text);
        setStatus(
          "Pedido copiado! Configure o link de atendimento para habilitar o envio direto.",
        );
      } catch {
        setStatus(
          "Configure NEXT_PUBLIC_REQUEST_URL na Vercel para receber os pedidos.",
        );
      }
      return;
    }

    let destination = requestUrl;
    if (/wa\.me|whatsapp\.com/i.test(requestUrl)) {
      destination += `${requestUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(text)}`;
    } else if (/^mailto:/i.test(requestUrl)) {
      destination += `${requestUrl.includes("?") ? "&" : "?"}subject=${encodeURIComponent(
        "Pedido musical — Rotas America FM",
      )}&body=${encodeURIComponent(text)}`;
    } else {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // O link ainda será aberto mesmo sem acesso à área de transferência.
      }
    }

    window.open(destination, "_blank", "noopener,noreferrer");
    setStatus("Pedido preparado! Finalize o envio na janela que foi aberta.");
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Seu nome
          <input name="name" required placeholder="Como podemos te chamar?" />
        </label>
        <label>
          Sua cidade
          <input name="city" required placeholder="De onde você está ouvindo?" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Música
          <input name="song" required placeholder="Qual música quer ouvir?" />
        </label>
        <label>
          Artista
          <input name="artist" required placeholder="Nome do artista ou banda" />
        </label>
      </div>

      <button className="primary-button form-button" type="submit">
        <span>Enviar meu pedido</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m21 3-7.6 18-3.6-7-6.8-3.7L21 3Zm-10.5 9.6 2.6 5.1 4.5-10.6-10.7 3.4 3.6 2.1Z" />
        </svg>
      </button>

      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
