import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PhoneIcon, PinIcon } from "./icons";
import Reveal from "./Reveal";

export default function ServiceArea() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-beige/70 bg-cream-soft px-6 py-12 text-center shadow-soft md:py-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-16 right-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-brand/6 blur-2xl" />
            </div>
            <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-cream shadow-card">
              <PinIcon className="h-8 w-8" />
            </span>
            <h2 className="relative mt-5 text-3xl font-bold text-brand md:text-4xl">نخدم الرياض</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-8 text-brand-ink/75 md:text-lg">
              المسعودي يقدم خدمات التنظيف والصيانة المتخصصة داخل مدينة الرياض.
            </p>
            <a
              href={PHONE_TEL}
              className="relative mt-7 inline-flex items-center gap-2.5 rounded-full border-2 border-brand/20 bg-cream px-7 py-3 text-base font-bold text-brand transition-colors hover:border-brand/50"
            >
              <PhoneIcon className="h-5 w-5 text-accent" />
              <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
