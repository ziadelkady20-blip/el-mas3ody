export const PHONE_DISPLAY = "0507072077";
export const PHONE_TEL = "tel:0507072077";
export const WHATSAPP_TEL = "https://wa.me/966507072077";

export const NAV_LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#work", label: "أعمالنا" },
  { href: "#contact", label: "تواصل معنا" },
] as const;

export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  icon: "tank" | "pest" | "drain" | "sofa" | "floor";
};

export const SERVICES: ServiceItem[] = [
  {
    id: "tanks",
    number: "01",
    title: "صيانة وتعقيم وتنظيف الخزانات",
    shortTitle: "صيانة وتنظيف الخزانات",
    description:
      "خدمة متكاملة للخزانات العلوية والسفلية تشمل التنظيف العميق والتعقيم والصيانة، لضمان مياه أنظف وبيئة صحية آمنة لمنزلك.",
    bullets: [
      "تنظيف عميق للخزانات العلوية والسفلية",
      "تعقيم شامل بمواد آمنة",
      "صيانة ومعالجة الملاحظات",
    ],
    image: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%201.png?v=b69f32e",
    imageAlt: "فني متخصص يقوم بتنظيف وتعقيم خزان مياه علوي في الرياض",
    icon: "tank",
  },
  {
    id: "pest",
    number: "02",
    title: "رش المبيدات الحشرية",
    shortTitle: "رش المبيدات",
    description:
      "مكافحة الحشرات برش مبيدات متخصصة وبأسلوب احترافي يراعي سلامة المنزل وسكانه، مع تغطية دقيقة لأماكن انتشار الحشرات.",
    image: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%202.png?v=b211cf83",
    imageAlt: "فني مكافحة حشرات يقوم برش المبيدات داخل منزل بالرياض",
    icon: "pest",
  },
  {
    id: "drain",
    number: "03",
    title: "حل مشكلة انسداد الصرف",
    shortTitle: "حل انسداد الصرف",
    description:
      "معالجة جذرية لمشاكل الصرف الصحي بتقنية الضغط، مع تعقيم المواسير وإزالة الروائح الكريهة نهائيًا — مع الضمان.",
    bullets: [
      "معالجة مشاكل انسداد الصرف",
      "تعقيم مواسير الصرف بالضغط",
      "إزالة الروائح الكريهة",
      "مع الضمان",
    ],
    image: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%203.png?v=c8f30ce4",
    imageAlt: "فني يستخدم جهاز ضغط لتسليك وتعقيم مواسير الصرف الصحي",
    icon: "drain",
  },
  {
    id: "sofa",
    number: "04",
    title: "نظافة وغسيل المجالس والكنب",
    shortTitle: "غسيل المجالس والكنب",
    description:
      "غسيل عميق للمجالس والكنب يعيد نظافتها ورونقها وانتعاشها، بأجهزة احترافية ومواد مناسبة لكل نوع من الأقمشة.",
    image: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%204.png?v=93865a9c",
    imageAlt: "غسيل وتنظيف عميق للمجالس والكنب بأجهزة بخار احترافية",
    icon: "sofa",
  },
  {
    id: "floor",
    number: "05",
    title: "نظافة الأرضيات",
    shortTitle: "نظافة الأرضيات",
    description:
      "تنظيف احترافي لجميع أنواع الأرضيات يمنح منزلك مظهرًا أنظف وأكثر إشراقًا وبيئة صحية مريحة.",
    image: "https://raw.githubusercontent.com/ziadelkady20-blip/el-mas3ody/main/images/image%205.png?v=4165daa4",
    imageAlt: "جلي وتنظيف أرضيات رخام بجهاز تلميع احترافي",
    icon: "floor",
  },
];

export const WHY_ITEMS = [
  {
    title: "خبرة واحترافية",
    text: "فريق متخصص ينفذ كل خدمة بأسلوب احترافي منظم.",
    icon: "shield",
  },
  {
    title: "جودة في التنفيذ",
    text: "نهتم بالتفاصيل ونحرص على نتيجة تليق بمنزلك.",
    icon: "sparkle",
  },
  {
    title: "اهتمام بالنظافة",
    text: "النظافة أساس عملنا، من أول خطوة حتى تسليم الخدمة.",
    icon: "drop",
  },
  {
    title: "خدمة داخل الرياض",
    text: "نصل إليك أينما كنت داخل مدينة الرياض.",
    icon: "pin",
  },
  {
    title: "حلول متكاملة",
    text: "تنظيف وتعقيم وصيانة ومكافحة حشرات في مكان واحد.",
    icon: "grid",
  },
  {
    title: "اهتمام براحة العميل",
    text: "تواصل سهل وتنفيذ مرتب يراعي راحتك وخصوصيتك.",
    icon: "heart",
  },
] as const;
