import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "المسعودي | شركة تنظيف وصيانة بالرياض — تنظيف الخزانات، رش المبيدات، حل انسداد الصرف",
    template: "%s | المسعودي",
  },
  description:
    "المسعودي لخدمات التنظيف والصيانة بالرياض: صيانة وتعقيم وتنظيف الخزانات، رش المبيدات الحشرية، حل انسداد الصرف وإزالة الروائح مع الضمان، غسيل المجالس والكنب، ونظافة الأرضيات. اتصل الآن 0507072077.",
  keywords: [
    "شركة تنظيف بالرياض",
    "تنظيف الخزانات بالرياض",
    "تعقيم الخزانات",
    "صيانة الخزانات",
    "رش المبيدات بالرياض",
    "حل انسداد الصرف بالرياض",
    "تنظيف المجالس والكنب",
    "تنظيف الأرضيات",
    "المسعودي",
  ],
  openGraph: {
    title: "المسعودي — حلول متكاملة لنظافة وصيانة منزلك في الرياض",
    description:
      "خدمات تنظيف وتعقيم وصيانة متخصصة بجودة عالية في الرياض. اتصل الآن 0507072077.",
    locale: "ar_SA",
    type: "website",
    siteName: "المسعودي",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "المسعودي لخدمات التنظيف والصيانة بالرياض" }],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1B5E3F",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "المسعودي",
  description:
    "شركة خدمات تنظيف وتعقيم وصيانة في الرياض: تنظيف وصيانة الخزانات، رش المبيدات الحشرية، حل انسداد الصرف، غسيل المجالس والكنب، ونظافة الأرضيات.",
  telephone: "+966507072077",
  image: "/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "الرياض",
    addressCountry: "SA",
  },
  areaServed: {
    "@type": "City",
    name: "Riyadh",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "صيانة وتعقيم وتنظيف الخزانات" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "رش المبيدات الحشرية" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "حل مشكلة انسداد الصرف وتعقيم المواسير بالضغط" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "نظافة وغسيل المجالس والكنب" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "نظافة الأرضيات" } },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={plexArabic.variable}>
      <body className="bg-cream text-brand-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
