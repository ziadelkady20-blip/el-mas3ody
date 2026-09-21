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
  "عزل الأسطح",
] as const;

type Category = (typeof CATEGORIES)[number];

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<Category, "الكل">;
  tall?: boolean;
};

// سيتم إضافة صور الأعمال هنا واحدة واحدة حسب الصور التي يرفعها المستخدم.
const ITEMS: GalleryItem[] = [
  {
    src: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%208.png",
    alt: "عزل وتنظيف وتعقيم الخزانات",
    category: "الخزانات",
  },
  {
    src: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%209.png",
    alt: "عزل الأسطح",
    category: "عزل الأسطح",
  },
  {
    src: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%2010.png",
    alt: "غسيل المجالس والكنب",
    category: "المجالس والكنب",
  },
  {
    src: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%2011.png",
    alt: "رش المبيدات الحشرية",
    category: "المبيدات",
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
            لمحات من خدماتنا في التنظيف والتعقيم والصيانة والعزل داخل الرياض.
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

        {visible.length > 0 && (
          <div
            dir="rtl"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((item) => (
              <figure
                key={item.src + item.category}
                className="group relative overflow-hidden rounded-2xl bg-cream-soft shadow-card"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={item.tall ? 1000 : 600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
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
        )}
      </div>
    </section>
  );
}
