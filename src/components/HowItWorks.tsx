import { PhoneIcon, GridIcon, SparkleIcon, HeartIcon } from "./icons";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "تواصل معنا",
    text: "اتصل على 0507072077 أو أرسل طلبك من الموقع.",
    icon: PhoneIcon,
  },
  {
    number: "02",
    title: "حدد الخدمة",
    text: "اختر الخدمة التي تحتاجها ونحدد لك موعدًا مناسبًا.",
    icon: GridIcon,
  },
  {
    number: "03",
    title: "ننفذ الخدمة",
    text: "فريقنا ينفذ العمل باحترافية وأدوات متخصصة.",
    icon: SparkleIcon,
  },
  {
    number: "04",
    title: "استمتع بالنتيجة",
    text: "بيئة أنظف وأكثر راحة وأمانًا لك ولعائلتك.",
    icon: HeartIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">كيف نعمل</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">
            أربع خطوات بسيطة
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 100} className="relative">
              <div className="relative h-full rounded-2xl border border-beige/70 bg-cream p-6 text-center transition-all hover:-translate-y-1 hover:shadow-card">
                <span
                  aria-hidden
                  className="absolute -top-4 right-6 rounded-full bg-accent px-3.5 py-1 text-sm font-bold text-brand-ink shadow-card"
                >
                  {step.number}
                </span>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/8 text-brand">
                  <step.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-ink/70">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
