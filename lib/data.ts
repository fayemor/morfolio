export interface Project {
  title: string;
  year: string;
  tag_fr: string;
  tag_en: string;
  img: string;
  isWebSite?: boolean;
  siteUrl?: string;
  desc_fr: string;
  desc_en: string;
}

export interface GalleryItem {
  title: string;
  year: string;
  tag_fr: string;
  tag_en: string;
  img: string;
  desc_fr?: string;
  desc_en?: string;
}

export interface Article {
  title_fr: string;
  title_en: string;
  tag_fr: string;
  tag_en: string;
  img: string;
  content_fr: string;
  content_en: string;
}

export const projects: Project[] = [
    {
        title: "Raffet'Art Studio",
        year: "2025",
        tag_fr: "Identité Visuelle",
        tag_en: "Visual Identity",
        img: "/images/raffetart.png",
        desc_fr: "Conception de l'identité de marque globale, charte graphique et univers visuel du studio Raffet'Art.",
        desc_en: "Complete brand identity, visual guidelines, and design system for Raffet'Art studio."
    },
    {
        title: "Jang Biochimie",
        year: "2026",
        tag_fr: "Plateforme E-Learning",
        tag_en: "E-Learning Platform",
        img: "/images/jangbiochimie.png",
        isWebSite: true,
        siteUrl: "https://jangbiochimie.vercel.app",
        desc_fr: "Plateforme web interactive conçue pour l'apprentissage de la biochimie, intégrant des QCM pour les étudiants en 1ère et 2ème année de médecine.",
        desc_en: "Interactive web platform designed for learning biochemistry, featuring MCQs for 1st and 2nd-year medical students."
    },
    {
        title: "Xassida Cloud",
        year: "2026",
        tag_fr: "Plateforme Web",
        tag_en: "Web Platform",
        img: "/images/apercu_xc.jpeg",
        isWebSite: true,
        siteUrl: "https://www.xassidacloud.com",
        desc_fr: "Conception et développement complet de Xassidacloud.com. Une plateforme web moderne et performante offrant une interface utilisateur intuitive.",
        desc_en: "Complete design and development of Xassidacloud.com. A modern and high-performance web platform offering an intuitive user interface."
    }
];

export const gallery: GalleryItem[] = [
    { title: "Raffet'Art Studio Branding", year: "2025", tag_fr: "Affiche Culturelle", tag_en: "Cultural Poster", img: "/images/dsg1.jpg", desc_fr: "Direction artistique et conception.", desc_en: "Art direction and design." },
    { title: "Logo Raffet'Art", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg2.jpg" },
    { title: "Affiche publicitaire", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg3.jpg" },
    { title: "Mockup Raffet'Art", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg4.png" },
    { title: "Mockup DiarignTech", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg5.jpg" },
    { title: "Mockup T-Shirt DiarignTech", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg6.jpg" },
    { title: "Mockup DiarignTech 2", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg7.jpg" },
    { title: "Mockup DiarignTech 3", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg8.jpg" },
    { title: "Mockup DiarignTech 4", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg9.jpg" },
    { title: "Mockup DiarignTech 5", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg10.jpg" },
    { title: "Mockup DiarignTech 6", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg11.jpg" },
    { title: "Mockup DiarignTech 7", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg12.jpg" },
    { title: "Mockup DiarignTech 8", year: "2025", tag_fr: "Mockup", tag_en: "Mockup", img: "/images/dsg13.jpg" },
    { title: "Logo AMINA", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg14.jpg" },
    { title: "Logo AMINA Alt", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg15.jpg" },
    { title: "AMINA", year: "2025", tag_fr: "Branding", tag_en: "Branding", img: "/images/dsg16.jpg" },
    { title: "Carte visite AYRA", year: "2025", tag_fr: "Print", tag_en: "Print", img: "/images/dsg17.jpg" },
    { title: "Stand AYRA", year: "2025", tag_fr: "3D Print", tag_en: "3D Print", img: "/images/dsg18.jpg" },
    { title: "Recto Carte Visite AYRA", year: "2025", tag_fr: "Print", tag_en: "Print", img: "/images/dsg19.jpg" },
    { title: "Fond D'ecran AYRA", year: "2025", tag_fr: "Digital", tag_en: "Digital", img: "/images/dsg20.jpg" },
    { title: "Verso carte viste AMINA", year: "2025", tag_fr: "Print", tag_en: "Print", img: "/images/dsg21.jpg" },
    { title: "Logo Dahira Touba Medecine", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg23.png" },
    { title: "Logo UFR 2S v1", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg26.jpg" },
    { title: "Logo UFR 2S v2", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg27.jpg" },
    { title: "Couverture Medicale Niari Rakka", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg28.jpg" },
    { title: "Journee Khassida Touba", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg29.jpg" },
    { title: "Carte Barkeelou 2", year: "2025", tag_fr: "Print", tag_en: "Print", img: "/images/dsg30.png" },
    { title: "Chronogramme JK TAM", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg31.jpg" },
    { title: "Journee Khassida TAM", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg32.jpg" },
    { title: "Badge JK TAM", year: "2025", tag_fr: "Print", tag_en: "Print", img: "/images/dsg33.jpg" },
    { title: "Affiche Gamou 2026", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg34.jpg" },
    { title: "Bache JK TAM", year: "2025", tag_fr: "Print grand format", tag_en: "Large Print", img: "/images/dsg35.jpg" },
    { title: "Logo Delices de Ndasse", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg37.jpg" },
    { title: "Affiche Delices de Ndasse", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg38.jpg" },
    { title: "Logo Mor Faye", year: "2025", tag_fr: "Identité", tag_en: "Identity", img: "/images/dsg39.jpg" },
    { title: "Affiche DT", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg40.png" },
    { title: "Diapalema", year: "2025", tag_fr: "Affiche", tag_en: "Poster", img: "/images/dsg41.jpg" }
];

export const articles: Article[] = [
    {
        title_fr: "L'impact de l'ingénierie dans le design graphique",
        title_en: "The Impact of Engineering in Graphic Design",
        tag_fr: "Réflexion - Opinion - Design System - Pensée Modulaire",
        tag_en: "Design System & Thoughts",
        img: "https://placehold.co/800x450/1B1B1F/3B82F6?text=Image+Article+1",
        content_fr: `
            <p>La conception graphique a longtemps été considérée comme une discipline purement artistique, régie par l'intuition, le sens de l'esthétique et l'émotion. Cependant, à l'ère du numérique, la frontière entre le design et l'ingénierie s'affine considérablement.</p>
            <h3>La pensée modulaire</h3>
            <p>Un ingénieur logiciel conçoit des systèmes complexes basés sur des composants réutilisables. Cette même approche, appliquée au design, donne naissance à ce que l'on appelle les <strong>Design Systems</strong>.</p>
            <p>Chez <em>Raffet'Art</em>, cette méthode nous permet de garantir une cohérence visuelle absolue sur tous les supports.</p>
        `,
        content_en: `
            <p>Graphic design has long been considered a purely artistic discipline, governed by intuition, aesthetics, and emotion. However, in the digital age, the boundary between design and engineering is narrowing considerably.</p>
            <h3>Modular Thinking</h3>
            <p>A software engineer designs complex systems based on reusable components. This same approach, applied to design, gives rise to what we call <strong>Design Systems</strong>.</p>
            <p>At <em>Raffet'Art</em>, this method allows us to guarantee absolute visual consistency across all media.</p>
        `
    },
    {
        title_fr: "Développer des plateformes éducatives (Ex: Jang Biochimie)",
        title_en: "Building Educational Platforms (Ex: Jang Biochimie)",
        tag_fr: "Développement & EdTech",
        tag_en: "Development & EdTech",
        img: "https://placehold.co/800x450/1B1B1F/3B82F6?text=Image+Article+2",
        content_fr: `
            <p>La création de la plateforme <strong>Jang Biochimie</strong> a été un défi passionnant. L'objectif était de fournir aux étudiants un outil interactif, fiable et facile d'accès pour réviser via des QCM.</p>
            <h3>Priorité à l'expérience utilisateur (UX)</h3>
            <ul>
                <li>Mise en place d'un mode sombre esthétique réduisant la fatigue oculaire.</li>
                <li>Des retours visuels immédiats avec des couleurs sémantiques.</li>
                <li>Une navigation entièrement pensée pour les téléphones portables (Mobile-First).</li>
            </ul>
        `,
        content_en: `
            <p>Creating the <strong>Jang Biochimie</strong> platform was an exciting challenge. The goal was to provide students with an interactive, reliable, and easy-to-access tool to study via MCQs.</p>
            <h3>Prioritizing User Experience (UX)</h3>
            <ul>
                <li>Implementation of an aesthetic dark mode reducing eye strain.</li>
                <li>Immediate visual feedback with semantic colors.</li>
                <li>Navigation entirely designed for mobile phones (Mobile-First).</li>
            </ul>
        `
    }
];
