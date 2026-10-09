"use client";

import { useEffect, useRef } from "react";

/** Grille de fond et halo lumineux qui suit la souris. */
export default function BackgroundFX() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty("--gx", `${e.clientX}px`);
      glowRef.current?.style.setProperty("--gy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div id="bgGrid" aria-hidden="true" />
      <div id="bgGlow" ref={glowRef} aria-hidden="true" />
    </>
  );
}
