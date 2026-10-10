import { REF_URL } from "@/lib/ref";
import { IconChevronRight } from "./icons";

const games = [
  { name: "The Dog House 1000", provider: "Pragmatic Play", img: "/img/game-dog-house.jpg" },
  { name: "Le Digger", provider: "Hacksaw", img: "/img/game-le-digger.jpg" },
  { name: "Crown Coins", provider: "Endorphina", img: "/img/game-crown-coins.jpg" },
  { name: "Hit Hot Fruit", provider: "SpinJoy", img: "/img/game-hit-hot-fruit.jpg" },
  { name: "Jade Legends", provider: "Pragmatic Play", img: "/img/game-jade-legends.jpg" },
  { name: "Hell Hot 100", provider: "Endorphina", img: "/img/game-hell-hot.jpg" },
  { name: "Book of Coins", provider: "SpinJoy", img: "/img/game-book-of-coins.jpg" },
];

export function Games() {
  return (
    <section className="q8z3-games" aria-label="Топ слоты La Casino">
      <div className="q8z3-games-head">
        <h2 className="q8z3-games-h">Топ</h2>
        <a className="q8z3-more" href={REF_URL}>
          Больше
          <IconChevronRight />
        </a>
      </div>
      <div className="q8z3-scroll">
        {games.map((game) => (
          <a key={game.name} className="q8z3-game" href={REF_URL}>
            <img src={game.img} alt={`Слот ${game.name} от ${game.provider} в La Casino`} loading="lazy" />
            <span className="q8z3-game-name">{game.name}</span>
            <span className="q8z3-game-prov">{game.provider}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
