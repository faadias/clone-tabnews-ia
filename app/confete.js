"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Carrega a biblioteca em um chunk separado, fora do caminho crítico da página
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Confete() {
  const [tamanho, setTamanho] = useState(null);

  // O tamanho da janela só existe no navegador
  useEffect(() => {
    // Respeita quem prefere menos animação (e poupa CPU nesse caso)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTamanho({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  if (!tamanho) return null;

  return (
    <Confetti
      width={tamanho.width}
      height={tamanho.height}
      recycle={false}
      style={{ position: "fixed", pointerEvents: "none" }}
    />
  );
}
