// Illustration du hero : personnage assis dans un pouf orange, ordinateur sur les genoux.
// Dessin au trait ; les couleurs suivent le thème (variables CSS).
const BG = "fill-[color:var(--bg)]";
const ACC = "fill-[color:var(--accent)]";
const INK = "fill-[color:var(--text)]";
const STROKE_INK = "stroke-[color:var(--text)]";
const STROKE_BG = "stroke-[color:var(--bg)]";
const STROKE_ACC = "stroke-[color:var(--accent)]";

export default function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-label="Illustration : un développeur assis dans un pouf avec son ordinateur"
      className={className}
    >
      <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={STROKE_INK}>
        {/* sol */}
        <path d="M20 392 H540" />

        {/* lampe suspendue */}
        <path d="M215 0 V62" />
        <path d="M180 108 Q215 52 250 108 Z" className={BG} />
        <circle cx="215" cy="122" r="6" className={ACC} />
        <path d="M193 126 L186 135 M237 126 L244 135 M215 134 V146" className={STROKE_ACC} />

        {/* étagère, livres et plante */}
        <path d="M410 98 H540" strokeWidth="4" />
        <rect x="428" y="48" width="14" height="50" className={BG} />
        <rect x="444" y="42" width="13" height="56" className={ACC} />
        <rect x="459" y="52" width="14" height="46" className={BG} />
        <path d="M492 98 L496 74 H524 L528 98 Z" className={ACC} />
        <path d="M510 74 C500 62 500 48 510 38 C520 48 520 62 510 74 Z" className={BG} />
        <path d="M510 74 C498 70 490 60 492 50 C504 54 510 62 510 74 Z" className={BG} />
        <path d="M510 74 C522 70 530 60 528 50 C516 54 510 62 510 74 Z" className={BG} />

        {/* pouf orange */}
        <path
          d="M276 392 C256 334 268 236 344 196 C404 166 476 192 506 272 C526 328 520 366 508 392 Z"
          className={ACC}
        />

        {/* buste */}
        <path d="M394 210 C378 248 376 296 388 338 L458 338 C466 296 470 246 450 210 Z" className={BG} />

        {/* tête */}
        <circle cx="422" cy="172" r="34" className={BG} />
        <circle cx="453" cy="178" r="6" className={BG} />
        <path
          d="M388 168 C382 128 424 112 452 132 C462 146 458 164 454 170 C446 150 420 146 388 168 Z"
          className={INK}
        />
        <circle cx="403" cy="178" r="9" />
        <circle cx="425" cy="178" r="9" />
        <path d="M412 178 H416 M394 178 L388 174" />
        <path d="M402 194 Q412 202 422 194" />

        {/* jambes (pantalon noir) */}
        <path d="M424 346 L344 346" strokeWidth="30" className={STROKE_INK} />
        <path d="M344 346 L336 376" strokeWidth="28" className={STROKE_INK} />
        <path d="M410 338 L322 326" strokeWidth="34" className={STROKE_INK} />
        <path d="M322 326 L300 372" strokeWidth="30" className={STROKE_INK} />

        {/* chaussures orange */}
        <path d="M274 392 V380 Q274 366 292 366 L312 368 Q330 372 328 392 Z" className={ACC} />
        <path d="M314 392 V384 Q316 374 334 374 L352 376 Q368 380 366 392 Z" className={ACC} />

        {/* ordinateur portable */}
        <g transform="rotate(-8 345 258)">
          <rect x="300" y="226" width="90" height="64" rx="6" className={BG} />
          <circle cx="345" cy="258" r="5" className={ACC} stroke="none" />
        </g>
        <path d="M296 298 L404 292 L410 304 L300 312 Z" className={BG} />

        {/* bras */}
        <path d="M410 228 C404 258 392 276 360 298" strokeWidth="22" className={STROKE_INK} />
        <path d="M410 228 C404 258 392 276 360 298" strokeWidth="17" className={STROKE_BG} />
        <circle cx="356" cy="300" r="9" className={BG} />
      </g>
    </svg>
  );
}
