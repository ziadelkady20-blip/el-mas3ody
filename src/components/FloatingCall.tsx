import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function FloatingCall() {
  return (
    <>
      {/* Desktop floating call button */}
      <a
        href={PHONE_TEL}
        aria-label={`اتصل الآن ${PHONE_DISPLAY}`}
        className="animate-pulse-ring group fixed bottom-8 left-8 z-40 hidden h-15 w-15 items-center justify-center rounded-full bg-brand text-cream shadow-lift transition-all hover:-translate-y-1 hover:bg-brand-deep lg:flex"
      >
        <PhoneIcon className="h-6.5 w-6.5 transition-transform group-hover:-rotate-12" />
        <span className="pointer-events-none absolute left-full mr-0 ml-3 hidden whitespace-nowrap rounded-full bg-brand-deep px-4 py-2 text-sm font-bold text-cream opacity-0 shadow-card transition-opacity group-hover:opacity-100 lg:block">
          <span dir="ltr">{PHONE_DISPLAY}</span>
        </span>
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-beige/60 bg-cream/95 px-4 py-3 shadow-[0_-6px_24px_-8px_rgb(27_94_63/0.25)] backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <a
            href={PHONE_TEL}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-bold text-cream shadow-card"
          >
            <PhoneIcon className="h-4.5 w-4.5 text-accent" />
            اتصل الآن
            <span dir="ltr" className="tracking-wide">{PHONE_DISPLAY}</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-brand/25 bg-cream-soft px-4 py-2.5 text-sm font-bold text-brand"
          >
            اطلب خدمة
          </a>
        </div>
      </div>
    </>
  );
}
