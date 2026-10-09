import Tr from "./Tr";

const SOCIALS = [
  { href: "https://github.com/fayemor", icon: "fa-brands fa-github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/morfaye/", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
  { href: "https://x.com/mor__faye", icon: "fa-brands fa-x-twitter", label: "Twitter (X)" },
  { href: "https://wa.me/221781492438", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
  { href: "mailto:fayemor762@gmail.com", icon: "fa-regular fa-envelope", label: "E-mail" },
];

export default function Contact() {
  return (
    <footer id="contact" className="mt-12 bg-[var(--panel-2)] px-5 sm:px-8 pt-14 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <Tr
            as="h2"
            k="contact_title"
            className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug"
          />
          <div className="mt-3 h-1 w-10 rounded-full bg-[var(--accent)]"></div>
        </div>

        <ul className="grid gap-4 text-sm font-medium">
          <li>
            <a href="mailto:fayemor762@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
              <i className="fa-regular fa-envelope w-5 text-center"></i> fayemor762@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+221781492438" className="flex items-center gap-3 hover:text-accent transition-colors">
              <i className="fa-solid fa-phone w-5 text-center"></i> +221 78 149 24 38
            </a>
          </li>
          <li className="flex items-center gap-3">
            <i className="fa-solid fa-location-dot w-5 text-center"></i> Mboro, Sénégal
          </li>
        </ul>

        <div>
          <Tr as="div" k="connect_title" className="text-sm font-bold mb-4" />
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--panel)] flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Tr as="p" k="footer_rights" className="mt-12 text-center text-xs text-mute" />
    </footer>
  );
}
