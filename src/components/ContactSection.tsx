"use client";

import { useState, type FormEvent } from "react";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site";
import { CheckIcon, PhoneIcon, PinIcon, HomeIcon } from "./icons";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "تعذر إرسال الطلب، حاول مرة أخرى.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("تعذر إرسال الطلب، تأكد من اتصالك بالإنترنت أو اتصل بنا مباشرة.");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-beige bg-cream px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-ink/40 transition-colors focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <section id="contact" className="bg-cream-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-accent">تواصل معنا</span>
          <h2 className="mt-3 text-3xl font-bold text-brand md:text-4xl">اطلب خدمتك الآن</h2>
          <p className="mt-4 text-base leading-8 text-brand-ink/70">
            اتصل بنا مباشرة أو أرسل طلبك وسنتواصل معك في أقرب وقت.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Info card */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-[1.75rem] bg-brand p-8 text-cream shadow-lift">
              <h3 className="text-2xl font-bold">معلومات التواصل</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream/12 text-accent">
                    <HomeIcon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-sm text-cream/70">اسم الشركة</p>
                    <p className="mt-0.5 font-bold">المسعودي</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream/12 text-accent">
                    <PinIcon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-sm text-cream/70">المدينة</p>
                    <p className="mt-0.5 font-bold">الرياض، المملكة العربية السعودية</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream/12 text-accent">
                    <PhoneIcon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="text-sm text-cream/70">رقم التواصل</p>
                    <a href={PHONE_TEL} dir="ltr" className="mt-0.5 block text-lg font-bold tracking-wider hover:text-accent">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
              </ul>
              <a
                href={PHONE_TEL}
                className="mt-auto flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-brand-ink shadow-card transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                <PhoneIcon className="h-5 w-5" />
                اتصل الآن
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-[1.75rem] border border-beige/70 bg-cream p-7 shadow-soft md:p-9">
              {status === "success" ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-brand">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-brand">تم استلام طلبك بنجاح</h3>
                  <p className="mt-3 max-w-sm leading-8 text-brand-ink/70">
                    سنتواصل معك في أقرب وقت. وللتواصل الفوري يمكنك الاتصال على
                    {" "}
                    <a href={PHONE_TEL} dir="ltr" className="font-bold text-brand underline decoration-accent">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border border-beige px-6 py-2.5 text-sm font-bold text-brand hover:border-brand/40"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-brand">
                      الاسم
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="اسمك الكريم"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-brand">
                      رقم الجوال
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      dir="ltr"
                      placeholder="05xxxxxxxx"
                      className={`${inputCls} text-right placeholder:text-left`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-brand">
                      الخدمة المطلوبة
                    </label>
                    <select id="service" name="service" required defaultValue="" className={inputCls}>
                      <option value="" disabled>
                        اختر الخدمة
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="خدمة أخرى">خدمة أخرى</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-brand">
                      الرسالة <span className="font-normal text-brand-ink/50">(اختياري)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="اكتب أي تفاصيل إضافية عن طلبك..."
                      className={`${inputCls} resize-y`}
                    />
                  </div>
                  {status === "error" && (
                    <p role="alert" className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      {errorMsg}
                    </p>
                  )}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-full bg-brand px-8 py-3.5 text-base font-bold text-cream shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === "loading" ? "جارٍ الإرسال..." : "إرسال الطلب"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
