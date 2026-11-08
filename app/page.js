"use client";

import { useEffect } from "react";

const nomes = ["DODÔ", "FITA", "MENDOZA", "DÉDA", "BIGÃO"];

// Nomes comuns de vozes femininas pt-BR nos navegadores/sistemas
const nomesFemininos =
  /luciana|francisca|maria|vitoria|vitória|thalita|leticia|letícia|raquel|female|feminin|google português/i;
const nomesMasculinos = /antonio|antônio|daniel|felipe|male|masculin/i;

function escolherVoz() {
  const ptBR = speechSynthesis
    .getVoices()
    .filter((v) => v.lang.replace("_", "-").toLowerCase() === "pt-br");
  return (
    ptBR.find((v) => nomesFemininos.test(v.name)) ||
    ptBR.find((v) => !nomesMasculinos.test(v.name)) ||
    ptBR[0] ||
    null
  );
}

function falar(texto) {
  speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  const voz = escolherVoz();
  if (voz) fala.voice = voz;
  speechSynthesis.speak(fala);
}

export default function Home() {
  // Algumas vozes só carregam depois da primeira chamada
  useEffect(() => {
    speechSynthesis.getVoices();
  }, []);

  return (
    <ul>
      {nomes.map((nome) => (
        <li key={nome} onClick={() => falar(nome.toLowerCase())}>
          {nome}
        </li>
      ))}
    </ul>
  );
}
