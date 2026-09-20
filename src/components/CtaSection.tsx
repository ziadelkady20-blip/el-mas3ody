import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_TEL } from "@/lib/site";
import { DropIcon, LeafIcon, PhoneIcon, SparkleIcon } from "./icons";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center shadow-lift md:py-20">
          {/* Decorations */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-brand-deep/60 blur-3xl" />
            <LeafIcon className="absolute top-10 left-[12%] h-10 w-10 rotate-12 text-accent/30" />
            <DropIcon className="absolute bottom-12 right-[10%] h-9 w-9 text-cream/20" />
            <SparkleIcon className="absolute top-16 right-[22%] h-7 w-7 text-accent/40" />
          </div>

          <h2 className="relative text-3xl font-bold leading-snug text-cream md:text-4xl lg:text-[2.6rem]">
            جاهز لبيئة أنظف وأكثر راحة؟
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-8 text-cream/85 md:text-lg">
            تواصل مع المسعودي وحدد الخدمة التي تحتاجها.
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-accent px-9 py-3.5 text-base font-bold text-brand-ink shadow-card transition-all hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
            >
              اطلب خدمتك الآن
            </a>
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <a
                href={PHONE_TEL}
                className="flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-cream/30 px-8 py-3 text-base font-bold text-cream transition-colors hover:border-cream/70 sm:w-auto"
              >
                <PhoneIcon className="h-5 w-5 text-accent" />
                <span dir="ltr" className="text-lg tracking-wider">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_TEL}
                target="_blank"
                rel="noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3 text-base font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
              >
                <span aria-hidden className="text-xl leading-none">◉</span>
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
