import Reveal from "./Reveal";

type Review = {
  name: string;
  text: string;
  rating: "ممتاز" | "جيد";
};

const REVIEWS: Review[] = [
  { name: "محمد الحارثي", text: "وصول على الوقت، إنجاز وإتقان للعمل.", rating: "ممتاز" },
  { name: "Abdullah", text: "ما قصرت يا أبو أحمد، شغل احترافي وممتاز جدًا.", rating: "ممتاز" },
  { name: "حاتم الحمدان", text: "الفنيين ممتازين وفاهمين شغلهم.", rating: "ممتاز" },
  { name: "Khaled Alammar", text: "بارك الله فيكم ورزقكم الله من فضله.", rating: "ممتاز" },
  { name: "عمر السحلي", text: "ممتاز جدًا، جزاكم الله خير.", rating: "ممتاز" },
  { name: "أبو محمد", text: "إبداع وتعامل راقٍ ومصداقية 👍", rating: "ممتاز" },
  { name: "بدر", text: "ممتاز جدًا، أبو أحمد قمة في الأخلاق والدقة.", rating: "ممتاز" },
  { name: "معتز", text: "شكرًا.", rating: "ممتاز" },
  { name: "فيصل", text: "شغلهم ممتاز ونظيفين وسرعتهم ممتازة، وسماحتهم في التعامل خاصة أبو أحمد 👍🏻", rating: "ممتاز" },
  { name: "لبنى صالح", text: "جزاكم الله خيرًا، ما قصرتوا، يسعدكم. شغل احترافي وممتاز ومخلصين في عملهم.", rating: "ممتاز" },
  { name: "Ibrahim", text: "تعامل محترم ووصول بالوقت المحدد وإنجاز المطلوب بشكل تام وممتاز.", rating: "ممتاز" },
  { name: "مهند", text: "استجابة سريعة وخدمة ممتازة.", rating: "ممتاز" },
  { name: "نايف سندر", text: "يمتازون بالأمانة في القول والعمل.", rating: "ممتاز" },
  { name: "Fahd", text: "أداء مؤسسة منزل الدقة للمقاولات ممتاز جدًا، ومحترفون في أداء عملهم، ونفذوا الأعمال بكل دقة واحترافية عالية.", rating: "ممتاز" },
  { name: "نايف المطيري", text: "العمالة ممتازين وشغلهم ونظافتهم ممتازة، بالتوفيق 🌹", rating: "ممتاز" },
  { name: "Fahd", text: "التنفيذ ممتاز جدًا. تم تحديد مشكلة تسرب المياه في السقف بدقة، وهي مشكلة كانت موجودة من ثلاث سنوات، وتم إصلاحها بدقة وبشكل سريع.", rating: "ممتاز" },
  { name: "فيصل", text: "فوق المتوقع من إنجاز وتنظيف وسرعة ونفس طيبة.", rating: "ممتاز" },
  { name: "إبراهيم القاسمي", text: "مؤسسة ممتازة حلت مشكلة الانسداد بواسطة ضغط الماء، وانحلت المشكلة تمامًا والحمد لله.", rating: "ممتاز" },
  { name: "نوره", text: "سرعة في العمل ونظافة للمكان.", rating: "ممتاز" },
  { name: "عبدالله", text: "ما شاء الله عليهم، خدمة رائعة وتنظيف للمكان ممتاز.", rating: "ممتاز" },
  { name: "أبو محمد", text: "ممتاز جدًا، حلّوا لي مشكلة لها ثلاث سنين عندي في المجاري، جزاهم الله خير.", rating: "ممتاز" },
  { name: "عبدالعزيز التميمي", text: "خدمة سريعة وأمانة في العمل.", rating: "ممتاز" },
  { name: "تهاني عبدالله", text: "خدمة مرة ممتازة.", rating: "ممتاز" },
  { name: "حلي", text: "الحقيقة إنهم ناس راقين واحترافيين بشكل كبير.", rating: "ممتاز" },
  { name: "محمد إبراهيم", text: "ما قصروا الشباب أبو أحمد وأحمد، جزاهم الله خيرًا.", rating: "ممتاز" },
  { name: "Hela", text: "الصراحة ما قصروا الشباب ويعطيهم العافية أبو أحمد وأحمد، شغلهم مرتب ويتم التنظيف بعد الشغل، والله يعافيهم.", rating: "ممتاز" },
  { name: "Fahd", text: "سبق أن قيّمت مؤسسة منزل الدقة بالعمل المميز وتنفيذ الأعمال بأمانة ودقة وتعامل راقٍ منهم.", rating: "ممتاز" },
  { name: "Ahmed", text: "محترمين وشغل احترافي وخدمة وأمانة وإتقان.", rating: "ممتاز" },
  { name: "Mojahid", text: "مجهود رائع من أبو أحمد وفريقه.", rating: "ممتاز" },
  { name: "مساعد البلوي", text: "تقييم جيد.", rating: "جيد" },
];

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
            آراء وتقييمات العملاء الإيجابية كما وردت في التقييمات المرفقة.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={(i % 3) * 70}>
              <article className="flex h-full min-h-48 flex-col rounded-3xl border border-beige/70 bg-cream p-6 shadow-sm transition-shadow hover:shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-brand">{review.name}</span>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand/8 px-3 py-1 text-xs font-bold text-brand">
                    <span aria-hidden className="text-accent">★</span>
                    {review.rating}
                  </span>
                </div>
                <div aria-label={review.rating} className="mt-4 flex gap-1 text-accent">
                  {Array.from({ length: review.rating === "ممتاز" ? 5 : 4 }).map((_, star) => (
                    <span key={star} aria-hidden>★</span>
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-7 text-brand-ink/85">{review.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
