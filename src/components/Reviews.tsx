import Reveal from "./Reveal";

const REVIEW_SLOTS = [1, 2, 3];

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-cream-soft py-16 md:py-24">
      <div aria-hidden className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      <div aria-hidden className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">تقييمات العملاء</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">آراء عملائنا</h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            مساحة مخصصة لعرض تقييمات وتجارب عملائنا كما هي، بدون إضافة أي تقييمات أو صور غير موثقة.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEW_SLOTS.map((slot, i) => (
            <Reveal key={slot} delay={i * 100}>
              <div className="flex min-h-64 flex-col items-center justify-center rounded-[2rem] border border-dashed border-beige bg-cream px-6 py-10 text-center shadow-sm">
                <span aria-hidden className="text-3xl text-accent">★</span>
                <h3 className="mt-5 text-lg font-bold text-brand">تقييم عميل</h3>
                <p className="mt-2 max-w-xs text-sm leading-7 text-brand-ink/60">
                  سيتم إضافة صورة التقييم هنا بعد رفعها.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
