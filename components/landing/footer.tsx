import { REF_URL } from "@/lib/ref";

const tags = [
  { tag: "#LaCasino", href: "#la-casino" },
  { tag: "#LaCasinoЗеркало", href: "#la-casino-zerkalo" },
  { tag: "#LaCasinoИграть", href: "#la-casino-igrat" },
  { tag: "#LaCasinoОфициальный", href: "#la-casino-oficialnyy" },
  { tag: "#LaCasinoОфициальныйСайт", href: "#la-casino-oficialnyy-sayt" },
  { tag: "#LaКазино", href: "#la-kazino" },
  { tag: "#ЛяКазино", href: "#lya-kazino" },
  { tag: "#ЛяКазиноЗеркало", href: "#lya-kazino-zerkalo" },
  { tag: "#ЛяКазиноЗеркалоРабочее", href: "#lya-kazino-zerkalo-rabochee" },
  { tag: "#ЛяКазиноИграть", href: "#lya-kazino-igrat" },
  { tag: "#ЛяКазиноОнлайн", href: "#lya-kazino-onlayn" },
  { tag: "#ЛяКазиноОфициальный", href: "#lya-kazino-oficialnyy" },
  { tag: "#ЛяКазиноОфициальныйСайт", href: "#lya-kazino-oficialnyy-sayt" },
];

export function Footer() {
  return (
    <footer className="q8z3-foot">
      <a className="q8z3-btn q8z3-btn-pink q8z3-foot-cta" href={REF_URL}>
        Зарегаться в La Casino!
      </a>
      <nav className="q8z3-tags" aria-label="Хэштеги и разделы страницы">
        {tags.map(({ tag, href }) => (
          <a key={tag} className="q8z3-tag" href={href}>
            {tag}
          </a>
        ))}
      </nav>
      <p className="q8z3-foot-note">
        18+ | Азартные игры могут вызывать зависимость. Играйте ответственно: устанавливайте лимиты и не
        рассматривайте казино как источник дохода. La Casino и Ля Казино — зарегистрированные товарные знаки
        владельца платформы. Страница носит информационный характер.
      </p>
    </footer>
  );
}
