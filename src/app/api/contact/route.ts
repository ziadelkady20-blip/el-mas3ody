import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactRequests } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      service?: string;
      message?: string;
    };

    const name = (body.name ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const service = (body.service ?? "").trim();
    const message = (body.message ?? "").trim();

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { ok: false, error: "يرجى إدخال الاسم بشكل صحيح." },
        { status: 400 },
      );
    }

    const phoneDigits = phone.replace(/[\s\-()+]/g, "");
    if (!/^\d{9,15}$/.test(phoneDigits)) {
      return NextResponse.json(
        { ok: false, error: "يرجى إدخال رقم جوال صحيح." },
        { status: 400 },
      );
    }

    if (service.length < 2 || service.length > 160) {
      return NextResponse.json(
        { ok: false, error: "يرجى اختيار الخدمة المطلوبة." },
        { status: 400 },
      );
    }

    await db.insert(contactRequests).values({
      name,
      phone: phoneDigits,
      service,
      message: message ? message.slice(0, 2000) : null,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى أو الاتصال على 0507072077." },
      { status: 500 },
    );
  }
}
