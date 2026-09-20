"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex h-14 w-[118px] shrink-0 items-center justify-center overflow-hidden" aria-label="المسعودي — الصفحة الرئيسية">
          <Image
            src="/images/logo.png"
            alt="شعار المسعودي"
            width={632}
            height={483}
            priority
            className={`brand-logo h-[90px] w-[118px] max-w-none object-cover object-center transition-transform duration-300 ${scrolled ? "scale-[1.18]" : "scale-[1.24]"}`}
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-[15px] font-medium text-brand transition-colors hover:bg-brand/8 hover:text-brand-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop phone + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_TEL}
            className="group flex items-center gap-2 rounded-full border border-beige bg-cream-soft px-4 py-2 text-brand transition-colors hover:border-brand/40"
          >
            <PhoneIcon className="h-4.5 w-4.5 text-accent transition-transform group-hover:-rotate-12" />
            <span dir="ltr" className="text-[15px] font-bold tracking-wide">
              {PHONE_DISPLAY}
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-[15px] font-bold text-cream shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
          >
            اطلب خدمتك الآن
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
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
