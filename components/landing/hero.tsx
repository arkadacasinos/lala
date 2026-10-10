import { REF_URL } from "@/lib/ref";

export function Hero() {
  return (
    <section className="q8z3-hero" aria-label="Приветственный бонус La Casino">
      <img
        className="q8z3-hero-img"
        src="/img/hero.jpg"
        alt="Неоновый баннер La Casino: мощный старт до 225% + 1000 ФС на четыре депозита"
        fetchPriority="high"
      />
      <div className="q8z3-hero-box">
        <h1 className="q8z3-h1">
          Мощный старт:
          <span className="q8z3-sr"> Ля Казино (La Casino) — официальный сайт онлайн казино</span>
        </h1>
        <p className="q8z3-hero-sub">до 225% + 1000 ФС на четыре депозита</p>
        <a className="q8z3-btn q8z3-btn-pink q8z3-hero-cta" href={REF_URL}>
          Зарегаться!
        </a>
      </div>
    </section>
  );
}
