"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Confete() {
  const [tamanho, setTamanho] = useState(null);

  // O tamanho da janela só existe no navegador
  useEffect(() => {
    setTamanho({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  if (!tamanho) return null;

  return (
    <Confetti
      width={tamanho.width}
      height={tamanho.height}
      recycle={false}
      style={{ position: "fixed" }}
    />
  );
}
