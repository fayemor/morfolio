import SectionHeading from "./SectionHeading";
import Tr from "./Tr";
import AboutIllustration from "./illustrations/AboutIllustration";

const TRAITS = [
  { icon: "fa-screwdriver-wrench", key: "trait_support" },
  { icon: "fa-network-wired", key: "trait_network" },
  { icon: "fa-code", key: "trait_web" },
  { icon: "fa-pen-nib", key: "trait_design" },
  { icon: "fa-microchip", key: "trait_electronics" },
  { icon: "fa-robot", key: "trait_ai" },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-5 sm:px-8 max-w-6xl mx-auto z-10 relative">
      <div className="reveal grid md:grid-cols-2 gap-10 items-center">
        <AboutIllustration className="w-full max-w-md h-auto mx-auto" />
        <div>
          <SectionHeading titleKey="about_title" className="mb-5" />
          <Tr as="p" k="about_desc" className="text-mute leading-relaxed" />
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5">
            {TRAITS.map((trait) => (
              <li key={trait.key} className="flex items-center gap-2.5 text-xs font-bold">
                <i className={`fa-solid ${trait.icon} text-accent text-lg w-6 text-center`}></i>
                <Tr k={trait.key} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
