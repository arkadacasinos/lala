import { REF_URL } from "@/lib/ref";
import { IconArrowUpRight, IconStar } from "./icons";

const payouts = [
  { mult: "×2,7", star: false, id: "ID 59·····56", sum: "3 000 RUB", dep: "1105 RUB депозит" },
  { mult: "×4,7", star: false, id: "ID 31·····90", sum: "8 000 RUB", dep: "1700 RUB депозит" },
  { mult: "×2,3", star: false, id: "ID 47·····38", sum: "5 000 RUB", dep: "2 150 RUB депозит" },
  { mult: "×3,7", star: false, id: "ID 27·····99", sum: "4 000 RUB", dep: "1 083 RUB депозит" },
  { mult: "×9", star: true, id: "ID 46·····92", sum: "6 320 RUB", dep: "699 RUB депозит" },
  { mult: "×5,5", star: true, id: "ID 36·····20", sum: "6 000 RUB", dep: "1 100 RUB депозит" },
];

export function Payouts() {
  return (
    <section className="q8z3-pay" aria-label="Топ выплаты игроков за сутки">
      <p className="q8z3-pay-head">
        ТОП Выплаты
        <IconStar />
      </p>
      <p className="q8z3-pay-total">23 671 256 RUB</p>
      <div className="q8z3-scroll">
        {payouts.map((item) => (
          <a
            key={item.id}
            className="q8z3-pay-item"
            href={REF_URL}
            aria-label={`Выплата ${item.sum} — перейти в La Casino`}
          >
            <span className={item.star ? "q8z3-pay-badge q8z3-pay-badge--star" : "q8z3-pay-badge"}>{item.mult}</span>
            <span className="q8z3-pay-col">
              <span className="q8z3-pay-id">{item.id}</span>
              <span className="q8z3-pay-sum">
                {item.sum}
                <IconArrowUpRight />
              </span>
              <span className="q8z3-pay-dep">{item.dep}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
