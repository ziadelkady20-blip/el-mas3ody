"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_TEL } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.55 0 .26 5.28.26 11.79c0 2.08.54 4.1 1.57 5.88L.17 24l6.48-1.7a11.8 11.8 0 0 0 5.4 1.3h.01c6.5 0 11.78-5.28 11.78-11.79 0-3.15-1.23-6.11-3.34-8.31Zm-8.45 18.08h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.85 1.01 1.03-3.75-.23-.38a9.78 9.78 0 0 1-1.5-5.1C2.13 6.37 6.58 1.92 12.05 1.92a9.8 9.8 0 0 1 6.97 2.89 9.8 9.8 0 0 1 2.88 6.98c0 5.47-4.45 9.92-9.85 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.22-.66.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.15.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.74.65.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z" fill="currentColor"/>
    </svg>
  );
}


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F3E6] shadow-soft"
          : "bg-[#F8F3E6]"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:absolute lg:left-8 lg:top-1/2 lg:flex lg:-translate-y-1/2">
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-[15px] font-bold text-cream shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
          >
            اطلب خدمتك الآن
          </a>
          <a
            href={PHONE_TEL}
            className="group flex items-center gap-2 rounded-full border border-beige bg-cream-soft px-4 py-2.5 text-brand transition-all hover:border-brand/40 hover:bg-white"
          >
            <PhoneIcon className="h-4.5 w-4.5 text-accent transition-transform group-hover:-rotate-12" />
            <span dir="ltr" className="text-[15px] font-bold tracking-wide">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_TEL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر واتساب"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-all hover:-translate-y-0.5 hover:brightness-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Desktop nav */}
        <nav aria-label="التنقل الرئيسي" className="hidden items-center justify-self-center lg:flex">
          <ul className="flex items-center gap-0.5 rounded-full border border-beige/60 bg-cream/70 px-1.5 py-1 shadow-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 text-[15px] font-medium text-brand transition-all hover:bg-white hover:text-brand-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_TEL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={PHONE_TEL}
            aria-label={`اتصل الآن ${PHONE_DISPLAY}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-cream shadow-card"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-beige text-brand"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-cream transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[480px] border-t border-beige/60 shadow-soft" : "max-h-0"
        }`}
      >
        <nav aria-label="قائمة الجوال" className="px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-brand transition-colors hover:bg-brand/8"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-beige/60 pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand px-5 py-3 text-center text-base font-bold text-cream"
            >
              اطلب خدمتك الآن
            </a>
            <a
              href={WHATSAPP_TEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="font-bold">تواصل عبر واتساب</span>
            </a>
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center gap-2 rounded-full border border-beige px-5 py-3 text-brand"
            >
              <PhoneIcon className="h-5 w-5 text-accent" />
              <span dir="ltr" className="font-bold">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
