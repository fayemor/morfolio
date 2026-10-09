import Timeline from "./Timeline";

const ITEMS = [
  { n: 1, icon: "fa-briefcase", desc: true },
  { n: 2, icon: "fa-network-wired", desc: true },
];

export default function Experience() {
  return <Timeline id="experience" titleKey="exp_title" items={ITEMS} />;
}
