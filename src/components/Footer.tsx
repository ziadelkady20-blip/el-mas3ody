import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site";
import { PhoneIcon, PinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand-deep pb-28 text-cream lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-cream/75">
              المسعودي لخدمات التنظيف والصيانة والعزل — خدمة احترافية لنظافة
              وصيانة منزلك في الرياض.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="روابط سريعة">
            <h3 className="text-lg font-bold text-accent">روابط سريعة</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/80 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="خدماتنا">
            <h3 className="text-lg font-bold text-accent">خدماتنا</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-cream/80 transition-colors hover:text-accent">
                    {s.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-accent">تواصل معنا</h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-center gap-2.5 text-sm text-cream/80">
                <PinIcon className="h-4.5 w-4.5 shrink-0 text-accent" />
                الرياض، المملكة العربية السعودية
              </li>
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-2.5 text-sm font-bold text-cream transition-colors hover:text-accent">
                  <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-accent" />
                  <span dir="ltr" className="text-base tracking-wider">{PHONE_DISPLAY}</span>
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-brand-ink transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              اطلب خدمتك الآن
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center">
          <p className="text-sm text-cream/60">
            © {new Date().getFullYear()} المسعودي — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
