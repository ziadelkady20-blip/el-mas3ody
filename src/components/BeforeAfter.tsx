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
            حرّك المؤشر يمينًا ويسارًا وشاهد الفرق بين الحالة قبل التنظيف وبعده.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          <div
            dir="ltr"
            className="relative aspect-[16/10] select-none overflow-hidden rounded-[1.75rem] bg-brand/5 shadow-lift md:aspect-[16/8]"
          >
            {/* Before — the generated image's left half expanded across the frame */}
            <div
              aria-label="قبل التنظيف"
              className="absolute inset-0 bg-cover bg-left"
              style={{
                backgroundImage: `url("${COMPARISON_IMAGE}")`,
                backgroundSize: "200% 100%",
              }}
            />

            {/* After — the generated image's right half expanded across the frame */}
            <div
              aria-label="بعد التنظيف"
              className="absolute inset-0 bg-cover bg-right"
              style={{
                backgroundImage: `url("${COMPARISON_IMAGE}")`,
                backgroundSize: "200% 100%",
                clipPath: `inset(0 0 0 ${pos}%)`,
              }}
            />

            <div
              aria-hidden
              className="absolute inset-y-0 w-0.5 bg-cream shadow-[0_0_12px_rgb(0_0_0/0.35)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream bg-brand text-cream shadow-lift">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4" />
                </svg>
              </span>
            </div>

            <span className="absolute top-4 left-4 rounded-full bg-brand-deep/85 px-4 py-1.5 text-sm font-bold text-cream backdrop-blur">
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
              aria-label="اسحب للمقارنة بين قبل وبعد التنظيف"
              className="ba-range absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
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
