"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const COMPARISON_IMAGE = "/images/before-after.jpg";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section id="results" className="bg-cream-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">النتيجة</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">قبل وبعد</h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            اسحب المؤشر يمينًا ويسارًا وشاهد الفرق بين الحالة قبل التنظيف وبعده.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-5xl">
          <div
            dir="ltr"
            className="relative aspect-[3/2] select-none overflow-hidden rounded-[2rem] bg-brand/5 shadow-lift"
          >
            <img
              src={COMPARISON_IMAGE}
              alt="مقارنة قبل وبعد تنظيف وغسيل الكنب"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
              aria-hidden
            >
              <img
                src={COMPARISON_IMAGE}
                alt=""
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 z-20 w-px bg-white/95 shadow-[0_0_14px_rgb(0_0_0/0.28)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand text-white shadow-lift">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4" />
                </svg>
              </span>
            </div>

            <span className="pointer-events-none absolute top-5 left-5 z-20 rounded-full bg-brand-deep/90 px-4 py-1.5 text-sm font-bold text-cream shadow-sm">
              قبل
            </span>
            <span className="pointer-events-none absolute top-5 right-5 z-20 rounded-full bg-accent/95 px-4 py-1.5 text-sm font-bold text-brand-ink shadow-sm">
              بعد
            </span>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="اسحب للمقارنة بين قبل وبعد التنظيف"
              className="ba-range absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <p className="mt-4 text-center text-sm text-brand-ink/55">
            اسحب المؤشر يمينًا ويسارًا لمشاهدة التحول من قبل التنظيف إلى بعده.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
