import Image from "next/image";
import BrandLogo from "./BrandLogo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { CheckIcon, DropIcon, LeafIcon, PhoneIcon, PinIcon } from "./icons";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  "تنظيف وتعقيم الخزانات",
  "رش المبيدات الحشرية",
  "حل انسداد الصرف مع الضمان",
  "عزل الأسطح",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-brand/6 blur-3xl" />
        <LeafIcon className="absolute top-32 left-[8%] hidden h-10 w-10 text-accent/40 lg:block animate-float" />
        <DropIcon className="absolute bottom-24 left-[42%] hidden h-8 w-8 text-brand/20 lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 md:pb-24 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Copy */}
        <Reveal className="text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-beige bg-cream-soft px-4 py-1.5 text-sm font-semibold text-brand">
            <PinIcon className="h-4 w-4 text-accent" />
            نخدم مدينة الرياض
          </span>

          <a href="#about" className="mt-3 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold text-brand shadow-sm transition-all hover:border-accent/60 hover:bg-accent/15 hover:-translate-y-0.5">
            خبرة منذ 32 سنة في الرياض
          </a>

          <div className="relative mb-3 flex justify-center lg:justify-start">
            <div aria-hidden className="absolute inset-x-4 top-1/2 -z-10 h-24 -translate-y-1/2 rounded-full bg-accent/8 blur-2xl" />
            <BrandLogo className="h-auto w-[250px] sm:w-[290px] md:w-[320px]" priority />
          </div>

          <h1 className="mt-1 text-3xl font-bold leading-[1.3] text-brand md:text-4xl xl:text-[2.55rem]">
            حلول متكاملة لنظافة وصيانة منزلك
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-brand-ink/75 md:text-lg lg:mx-0">
            خدمات تنظيف وتعقيم وصيانة متخصصة بجودة عالية لنمنحك بيئة أنظف
            وأكثر راحة وأمانًا في الرياض.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-brand">
                <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="w-full rounded-full bg-brand px-8 py-3.5 text-center text-base font-bold text-cream shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift sm:w-auto"
            >
              اطلب خدمتك الآن
            </a>
            <a
              href={PHONE_TEL}
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand/20 bg-cream-soft px-7 py-3 text-base font-bold text-brand transition-colors hover:border-brand/50 sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5 text-accent" />
              اتصل بنا
              <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>

        {/* Visual */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-beige"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/ChatGPT%20Image%2020%20%D8%B3%D8%A8%D8%AA%D9%85%D8%A8%D8%B1%202026%D8%8C%2004_22_05%20%D8%B5.png"
                alt="فني من فريق المسعودي لخدمات التنظيف والصيانة في الرياض"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-deep/25 via-transparent to-transparent"
              />
            </div>

          </div>
        </Reveal>
      </div>

      {/* Beige separator */}
      <div aria-hidden className="mx-auto h-px max-w-7xl bg-beige/70" />
    </section>
  );
}
