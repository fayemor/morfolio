import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import PortfolioProvider from "@/components/PortfolioProvider";
import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const TITLE = "Mor Faye — Support IT, Développeur Web & Graphiste Designer";
const DESCRIPTION =
  "Mor Faye — Technicien Supérieur en Informatique, spécialisé en support IT, réseaux, développement web et design graphique. Basé à Mboro, Sénégal.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${SITE_NAME}` },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/morfaye.jpg", alt: "Mor Faye" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mor Faye",
  jobTitle: "Support IT, Développeur Web, Graphiste Designer",
  address: { "@type": "PostalAddress", addressLocality: "Mboro", addressCountry: "SN" },
  email: "fayemor762@gmail.com",
  url: SITE_URL,
  sameAs: Object.values(SOCIAL_LINKS),
};

// Applique le thème clair avant le premier rendu pour éviter le flash
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-screen selection:bg-[var(--accent)] selection:text-white transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
