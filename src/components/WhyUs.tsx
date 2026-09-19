import { WHY_ITEMS } from "@/lib/site";
import {
  DropIcon,
  GridIcon,
  HeartIcon,
  PinIcon,
  ShieldIcon,
  SparkleIcon,
} from "./icons";
import Reveal from "./Reveal";

const ICONS = {
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  drop: DropIcon,
  pin: PinIcon,
  grid: GridIcon,
  heart: HeartIcon,
} as const;

export default function WhyUs() {
  return (
    <section id="why" className="bg-cream-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">لماذا نحن؟</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">لماذا المسعودي؟</h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            نؤمن أن النظافة والراحة تبدأ من التفاصيل، لذلك نعمل بأسلوب احترافي
            يضع جودة الخدمة وراحة العميل أولًا.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((item, i) => {
            const Ico = ICONS[item.icon];
            return (
              <Reveal as="li" key={item.title} delay={(i % 3) * 100}>
                <div className="group h-full rounded-2xl border border-beige/70 bg-cream p-6 transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-cream transition-colors group-hover:bg-brand-deep">
                    <Ico className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-brand-ink/70">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
