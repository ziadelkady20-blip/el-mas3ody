import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site";
import { CheckIcon, LeafIcon, PhoneIcon } from "./icons";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-24">
      <LeafIcon
        aria-hidden
        className="absolute -left-6 top-16 hidden h-24 w-24 -rotate-12 text-accent/15 lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="text-sm font-bold tracking-widest text-accent">من نحن</span>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-brand md:text-4xl">
            المسعودي لخدمات التنظيف والصيانة والعزل
          </h2>
          <p className="mt-5 text-base leading-9 text-brand-ink/75 md:text-lg">
            مزوّد خدمات محترف في مدينة الرياض، متخصص في التنظيف والتعقيم
            والصيانة ومكافحة الحشرات وحلول الصرف الصحي وما يرتبط بها من خدمات
            المنازل والمنشآت. نعمل بأدوات احترافية وأسلوب منظم، وهدفنا أن
            نمنحك بيئة أنظف وأكثر راحة وأمانًا.
          </p>
          <ul className="mt-6 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.id} className="flex items-center gap-2.5 text-[15px] font-semibold text-brand">
                <CheckIcon className="h-4.5 w-4.5 shrink-0 text-accent" />
                {s.shortTitle}
              </li>
            ))}
          </ul>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3 text-base font-bold text-cream shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            <PhoneIcon className="h-5 w-5 text-accent" />
            <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
          </a>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div
            aria-hidden
            className="absolute -top-5 -left-5 h-full w-full rounded-[2rem] bg-beige/40"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%206.png"
              alt="فريق المسعودي أثناء تنفيذ خدمات النظافة داخل أحد المنازل بالرياض"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 right-5 rounded-2xl bg-cream-soft/95 px-5 py-3 shadow-lift backdrop-blur">
            <p className="text-sm font-bold text-brand">الرياض — المملكة العربية السعودية</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
