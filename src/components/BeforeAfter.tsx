"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section id="results" className="bg-cream-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">النتيجة</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">قبل وبعد</h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            الفرق يظهر من أول خدمة — حرّك المؤشر لتشاهد الفرق قبل وبعد التنظيف.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          <div
            dir="ltr"
            className="relative aspect-[16/10] select-none overflow-hidden rounded-[1.75rem] shadow-lift md:aspect-[16/8]"
          >
            {/* After (base) */}
            <Image
              src="/images/after-sofa.jpg"
              alt="كنب بعد الغسيل والتنظيف العميق — نظيف ومنتعش"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            {/* Before (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src="/images/before-sofa.jpg"
                alt="كنب قبل الغسيل — متسخ وباهت"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Divider + handle */}
            <div
              aria-hidden
              className="absolute inset-y-0 w-0.5 bg-cream shadow-[0_0_12px_rgb(0_0_0/0.35)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream bg-brand text-cream shadow-lift">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4" />
                </svg>
              </span>
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 rounded-full bg-brand-deep/80 px-4 py-1.5 text-sm font-bold text-cream backdrop-blur">
              قبل
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-accent/90 px-4 py-1.5 text-sm font-bold text-brand-ink backdrop-blur">
              بعد
            </span>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="مقارنة قبل وبعد التنظيف"
              className="ba-range absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-4 text-center text-sm text-brand-ink/55">
            * صور توضيحية لعرض فكرة الخدمة — يتم استبدالها بصور من أعمال المسعودي الفعلية.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
