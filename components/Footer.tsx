import Tr from "./Tr";

const SOCIALS = [
  { href: "https://wa.me/221781492438", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
  { href: "https://www.linkedin.com/in/morfaye/", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
  { href: "https://github.com/fayemor", icon: "fa-brands fa-github", label: "GitHub" },
  { href: "https://x.com/mor__faye", icon: "fa-brands fa-x-twitter", label: "Twitter (X)" },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[var(--border)] py-10 px-5 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Tr as="div" k="footer_rights" className="text-xs text-mute text-center sm:text-left" />
        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-xl border border-[var(--border)] flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
