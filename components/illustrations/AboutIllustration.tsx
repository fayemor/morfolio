// Illustration « À propos » : personnage à la fenêtre avec une tasse, pile de livres.
const BG = "fill-[color:var(--bg)]";
const ACC = "fill-[color:var(--accent)]";
const INK = "fill-[color:var(--text)]";
const STROKE_INK = "stroke-[color:var(--text)]";
const STROKE_BG = "stroke-[color:var(--bg)]";

export default function AboutIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 330"
      role="img"
      aria-label="Illustration : une personne avec une tasse à côté d'une pile de livres"
      className={className}
    >
      <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={STROKE_INK}>
        {/* sol / table */}
        <path d="M10 316 H430" />

        {/* fenêtre cintrée avec nuages */}
        <path d="M24 210 V88 Q24 30 84 30 Q144 30 144 88 V210" />
        <path d="M84 30 V210 M24 120 H144" />
        <path d="M38 112 Q38 96 54 96 Q58 82 74 84 Q88 80 94 94 Q108 94 108 108 Q108 112 104 112 Z" className={BG} />

        {/* buste */}
        <path d="M150 316 C150 250 182 214 232 212 C282 214 314 250 314 316 Z" className={BG} />

        {/* tête */}
        <circle cx="232" cy="150" r="34" className={BG} />
        <circle cx="266" cy="156" r="6" className={BG} />
        <path
          d="M198 150 C192 112 236 98 262 122 C272 132 268 150 266 156 C256 140 224 136 198 150 Z"
          className={INK}
        />
        <circle cx="238" cy="102" r="12" className={INK} />
        <circle cx="222" cy="158" r="2.5" className={INK} />
        <circle cx="246" cy="158" r="2.5" className={INK} />
        <path d="M224 172 Q234 180 244 172" />

        {/* bras et tasse orange */}
        <path d="M270 236 C284 262 278 282 262 292" strokeWidth="24" className={STROKE_INK} />
        <path d="M270 236 C284 262 278 282 262 292" strokeWidth="19" className={STROKE_BG} />
        <rect x="244" y="264" width="40" height="34" rx="5" className={ACC} />
        <path d="M284 274 Q298 274 298 286 Q298 298 284 294" />

        {/* pile de livres */}
        <rect x="326" y="296" width="100" height="20" rx="3" className={BG} />
        <rect x="334" y="276" width="84" height="20" rx="3" className={BG} />
        <rect x="330" y="258" width="92" height="18" rx="3" className={ACC} />
      </g>
    </svg>
  );
}
