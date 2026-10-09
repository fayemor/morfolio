import Image from "next/image";

/**
 * Portrait au crayon, sans fond (PNG transparent).
 * Mode clair : trait noir. Mode sombre : le trait est inversé en « craie » claire
 * (voir --photo-filter dans globals.css), comme le reste du site.
 */
export default function HeroPortrait({ className }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[460px] aspect-[3/4] ${className ?? ""}`}>
      {/* halo d'accent très léger, uniquement pour détacher le trait du fond */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[12%] bottom-0 h-1/2 rounded-full bg-[var(--accent-dim)] blur-3xl"
      />
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
        }}
      >
        <Image
          src="/images/morfaye-sketch.png"
          alt="Portrait de Mor Faye, dessin au crayon"
          fill
          priority
          sizes="(min-width: 1024px) 460px, 80vw"
          className="object-contain object-bottom transition-[filter] duration-300"
          style={{ filter: "var(--photo-filter)" }}
        />
      </div>
    </div>
  );
}
