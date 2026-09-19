"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const CATEGORIES = [
  "الكل",
  "الخزانات",
  "المبيدات",
  "الصرف",
  "المجالس والكنب",
  "الأرضيات",
] as const;

type Category = (typeof CATEGORIES)[number];

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<Category, "الكل">;
  tall?: boolean;
};

/**
 * لتحديث المعرض لاحقًا: أضف الصورة إلى public/images
 * ثم أضف عنصرًا جديدًا هنا مع التصنيف المناسب.
 */
const ITEMS: GalleryItem[] = [
  {
    src: "/images/service-tanks.jpg",
    alt: "تنظيف وتعقيم خزان مياه علوي بالرياض",
    category: "الخزانات",
    tall: true,
  },
  {
    src: "/images/service-pest.jpg",
    alt: "رش مبيدات حشرية داخل منزل بالرياض",
    category: "المبيدات",
  },
  {
    src: "/images/service-drain.jpg",
    alt: "تسليك وتعقيم مواسير الصرف بالضغط",
    category: "الصرف",
  },
  {
    src: "/images/service-sofa.jpg",
    alt: "غسيل مجالس وكنب بالبخار",
    category: "المجالس والكنب",
    tall: true,
  },
  {
    src: "/images/after-sofa.jpg",
    alt: "كنب بعد الغسيل العميق",
    category: "المجالس والكنب",
  },
  {
    src: "/images/service-floor.jpg",
    alt: "تنظيف وتلميع أرضيات رخام",
    category: "الأرضيات",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("الكل");
  const visible = active === "الكل" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">أعمالنا</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">من أعمالنا</h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            لمحات من خدماتنا في التنظيف والتعقيم والصيانة داخل الرياض.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                active === cat
                  ? "bg-brand text-cream shadow-card"
                  : "border border-beige bg-cream-soft text-brand hover:border-brand/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>figure]:mb-6">
          {visible.map((item) => (
            <figure
              key={item.src + item.category}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-card"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={item.tall ? 1000 : 600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] ${
                  item.tall ? "aspect-[4/4.4]" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-brand-deep/85 via-brand-deep/30 to-transparent p-4 pt-12">
                <span className="text-sm font-bold text-cream">{item.alt}</span>
                <span className="shrink-0 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold text-brand-ink">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
