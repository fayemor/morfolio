import GalleryCta from "./GalleryCta";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <SectionHeading titleKey="gallery_title" />
      <GalleryCta />
    </section>
  );
}
