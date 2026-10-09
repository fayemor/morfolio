import Timeline from "./Timeline";

const ITEMS = [
  { n: 3, icon: "fa-graduation-cap", desc: true },
  { n: 4, icon: "fa-book-open", desc: false },
];

export default function Education() {
  return <Timeline id="education" titleKey="edu_title" items={ITEMS} />;
}
