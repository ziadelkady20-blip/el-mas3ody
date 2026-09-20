import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site";
import {
  CheckIcon,
  DrainIcon,
  FloorIcon,
  PestIcon,
  PhoneIcon,
  ShieldIcon,
  SofaIcon,
  TankIcon,
} from "./icons";
import Reveal from "./Reveal";

const ICONS = {
  tank: TankIcon,
  pest: PestIcon,
  drain: DrainIcon,
  sofa: SofaIcon,
  floor: FloorIcon,
} as const;

function CardCta({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
      <a
        href="#contact"
        className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
          dark
            ? "bg-accent text-brand-ink shadow-card hover:brightness-105"
            : "bg-brand text-cream shadow-card hover:bg-brand-deep"
        }`}
      >
        اطلب الخدمة
      </a>
      <a
        href={PHONE_TEL}
        className={`group flex items-center gap-2 text-sm font-bold ${
          dark ? "text-cream/90 hover:text-cream" : "text-brand hover:text-brand-deep"
        }`}
      >
        <PhoneIcon className="h-4 w-4 text-accent transition-transform group-hover:-rotate-12" />
        <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}

export default function Services() {
  const [tanks, pest, drain, sofa, floor] = SERVICES;
  const TankIco = ICONS[tanks.icon];
  const PestIco = ICONS[pest.icon];
  const DrainIco = ICONS[drain.icon];

  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">خدماتنا</span>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-brand md:text-4xl">
            حلول متكاملة لمنزل أكثر نظافة وأمانًا
          </h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            خمس خدمات أساسية ننفذها باحترافية داخل الرياض، مرتبة حسب الأكثر طلبًا.
          </p>
        </Reveal>

        {/* ── Service 01 · Featured ─────────────────────────── */}
        <Reveal className="mt-12">
          <article className="group grid overflow-hidden rounded-[1.75rem] border border-beige/70 bg-cream-soft shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2">
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
              <Image
                src={tanks.image}
                alt={tanks.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="bg-cream object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <span className="absolute top-4 right-4 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-cream shadow-card">
                الخدمة الأكثر طلبًا
              </span>
            </div>
            <div className="flex flex-col p-7 md:p-10">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/8 text-brand">
                  <TankIco className="h-7 w-7" />
                </span>
                <span aria-hidden className="text-5xl font-bold text-beige">
                  {tanks.number}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-brand md:text-[1.7rem]">
                {tanks.title}
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-brand-ink/70">
                {tanks.description}
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {tanks.bullets?.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm font-medium text-brand">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <CardCta />
            </div>
          </article>
        </Reveal>

        {/* ── Services 02 → 05 · Same featured layout ─────────── */}
        <div className="mt-8 grid gap-8">
          {[pest, drain, sofa, floor].map((service, idx) => {
            const Ico = ICONS[service.icon];
            const dark = service.id === "drain";
            return (
              <Reveal key={service.id} delay={idx * 80}>
                <article className={`group grid overflow-hidden rounded-[1.75rem] border border-beige/70 shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2 ${dark ? "bg-brand" : "bg-cream-soft"}`}>
                  <div className={`relative min-h-[260px] overflow-hidden lg:min-h-full ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {service.id === "drain" && <div aria-hidden className="absolute inset-0 bg-brand/35" />}
                  </div>
                  <div className={`flex flex-col p-7 md:p-10 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dark ? "bg-cream/12 text-accent" : "bg-brand/8 text-brand"}`}>
                        <Ico className="h-7 w-7" />
                      </span>
                      <span aria-hidden className={`text-5xl font-bold ${dark ? "text-cream/25" : "text-beige"}`}>{service.number}</span>
                    </div>
                    <h3 className={`mt-5 text-2xl font-bold md:text-[1.7rem] ${dark ? "text-cream" : "text-brand"}`}>{service.title}</h3>
                    <p className={`mt-3 text-[15px] leading-8 ${dark ? "text-cream/80" : "text-brand-ink/70"}`}>{service.description}</p>
                    {service.bullets && (
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {service.bullets.map((b, i) => (
                          <li key={b} className={`flex items-start gap-2 text-sm font-medium ${dark ? "text-cream" : "text-brand"}`}>
                            {i === 3 ? <ShieldIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" /> : <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />}
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      <a href="#contact" className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${dark ? "bg-accent text-brand-ink shadow-card hover:brightness-105" : "bg-brand text-cream shadow-card hover:bg-brand-deep"}`}>اطلب الخدمة</a>
                      <a href={PHONE_TEL} className={`group flex items-center gap-2 text-sm font-bold ${dark ? "text-cream/90 hover:text-cream" : "text-brand hover:text-brand-deep"}`}>
                        <PhoneIcon className="h-4 w-4 text-accent transition-transform group-hover:-rotate-12" />
                        <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
