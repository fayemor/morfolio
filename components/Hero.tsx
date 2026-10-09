import Tr from "./Tr";
import HeroPortrait from "./HeroPortrait";

// Lien de téléchargement direct (même ID Google Drive que l'ancien lien « view »).
// Sans target="_blank" : le visiteur reste sur le portfolio, le fichier se télécharge sur place.
// Mieux encore : déposez votre CV dans public/cv-mor-faye.pdf et mettez "/cv-mor-faye.pdf" ici.
const CV_URL = "https://drive.google.com/uc?export=download&id=1VtnyLRW7BDRr3lAejDap0twMp3KELhja";

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-16 px-5 sm:px-8 max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="boot boot-1 inline-block">
            <Tr as="p" k="hero_hi" className="font-semibold" />
            <div className="mt-1 h-0.5 w-8 rounded-full bg-[var(--accent)]"></div>
          </div>
          <h1 className="boot boot-2 mt-4 font-display text-6xl sm:text-7xl font-extrabold tracking-tight leading-none">
            Mor <span className="text-accent">Faye</span>
          </h1>
          <Tr as="p" k="role_tag" className="boot boot-2 mt-4 text-lg font-bold text-mute" />
          <Tr as="p" k="hero_desc" className="boot boot-3 mt-6 text-mute leading-relaxed max-w-md" />

          <div className="boot boot-4 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold shadow-[0_10px_24px_rgba(242,107,29,0.28)] hover:bg-[var(--accent-2)] transition-colors"
            >
              <Tr k="btn_projects" /> <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
            <a
              href={CV_URL}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--text)] text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              <Tr k="btn_cv" /> <i className="fa-solid fa-download text-xs text-accent"></i>
            </a>
          </div>
        </div>

        <div className="boot boot-5">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
