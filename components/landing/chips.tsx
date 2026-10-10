import { REF_URL } from "@/lib/ref";
import { IconCards, IconCherry, IconCube, IconDiamond, IconGift, IconRocket, IconTrophy } from "./icons";

const chips = [
  { label: "Слоты", Icon: IconCherry },
  { label: "Live-казино", Icon: IconCards },
  { label: "Быстрые игры", Icon: IconRocket },
  { label: "Бонусы", Icon: IconGift },
  { label: "ВИП-программа", Icon: IconDiamond },
  { label: "Турниры", Icon: IconTrophy },
  { label: "Провайдеры", Icon: IconCube },
];

export function Chips() {
  return (
    <nav className="q8z3-chips" aria-label="Разделы казино">
      {chips.map(({ label, Icon }) => (
        <a key={label} className="q8z3-chip" href={REF_URL}>
          <Icon />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
