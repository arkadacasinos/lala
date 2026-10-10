import { REF_URL } from "@/lib/ref";
import { IconBurger, IconCards, IconGift, IconSearch, IconSlots, IconStar } from "./icons";

const railLinks = [
  { label: "Бонусы", Icon: IconGift },
  { label: "Казино", Icon: IconSlots },
  { label: "Live Казино", Icon: IconCards },
];

export function Topbar() {
  return (
    <header className="q8z3-topbar">
      <a className="q8z3-burger" href="#q8z3-menu" aria-label="Открыть меню">
        <IconBurger />
      </a>
      <a className="q8z3-logo" href={REF_URL}>
        <IconStar />
        <span>
          ЛЯ<span className="q8z3-logo-i">Casino</span>
        </span>
      </a>
      <nav id="q8z3-menu" className="q8z3-rail" aria-label="Основное меню">
        {railLinks.map(({ label, Icon }) => (
          <a key={label} className="q8z3-rail-link" href={REF_URL}>
            <Icon />
            <span>{label}</span>
          </a>
        ))}
        <a className="q8z3-btn q8z3-btn-pink q8z3-rail-cta" href={REF_URL}>
          Регистрация
        </a>
      </nav>
      <a className="q8z3-scrim" href="#!" aria-label="Закрыть меню" tabIndex={-1} />
      <div className="q8z3-actions">
        <a className="q8z3-search" href={REF_URL} aria-label="Поиск игр">
          <IconSearch />
        </a>
        <a className="q8z3-btn q8z3-btn-ghost" href={REF_URL}>
          Вход
        </a>
        <a className="q8z3-btn q8z3-btn-pink" href={REF_URL}>
          Регистрация
        </a>
      </div>
    </header>
  );
}
