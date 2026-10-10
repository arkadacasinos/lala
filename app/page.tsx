import { Topbar } from "@/components/landing/topbar";
import { Hero } from "@/components/landing/hero";
import { Payouts } from "@/components/landing/payouts";
import { Chips } from "@/components/landing/chips";
import { Games } from "@/components/landing/games";
import { SeoArticle } from "@/components/landing/seo-article";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <div className="q8z3-page">
      <Topbar />
      <main className="q8z3-main">
        <Hero />
        <Payouts />
        <Chips />
        <Games />
        <SeoArticle />
      </main>
      <Footer />
    </div>
  );
}
