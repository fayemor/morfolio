"use client";

import { useEffect, useState } from "react";

const WORDS_PER_MINUTE = 200;

/** Temps de lecture calculé à partir du texte de #articleBody. */
export default function ReadingTime() {
  const [minutes, setMinutes] = useState<number | null>(null);

  useEffect(() => {
    const text = document.getElementById("articleBody")?.innerText ?? "";
    setMinutes(Math.ceil(text.split(/\s+/).length / WORDS_PER_MINUTE));
  }, []);

  return <span id="readingTimeText">{minutes === null ? "Calcul..." : `Lecture : ${minutes} min`}</span>;
}
