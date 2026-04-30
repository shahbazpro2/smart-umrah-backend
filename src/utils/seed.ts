import "dotenv/config";
import mongoose from "mongoose";
import Ritual from "../models/Ritual";

const ritualData = [
  {
    sequence: 1,
    key: "safar-ihram",
    isRequired: true,
    estimatedDuration: "15-30 min",
    icon: "✈️",
    translations: {
      en: {
        title: "✈️ Safar & Ihram",
        description:
          "Begin your journey with intention. Make Ihram before the Miqat boundary and recite Talbiyah.",
        tips: [
          "Make intention (Niyah) for Umrah - say Labbaik Allahumma Umrah",
          'Start Talbiyah: "Labbaik Allahumma Labbaik..."',
          "Wear white seamless garments (Ihram)",
          "Perform ritual bath (Ghusl) before Ihram",
          "This is the beginning of your sacred ritual worship",
        ],
        commonMistakes: [
          "Making Ihram after passing Miqat boundary",
          "Not making clear intention",
          "Wearing sewn clothes in Ihram",
        ],
      },
      ar: {
        title: "✈️ السفر والإحرام",
        description:
          "ابدأ رحلتك بنية واضحة. قم بالإحرام قبل حدود الميقات وابدأ التلبية.",
        tips: [
          'انوِ النية الواضحة: "لبيك اللهم عمرة"',
          'ابدأ التلبية: "لبيك اللهم لبيك..."',
          "ارتد ملابس إحرام بيضاء بدون خياطة",
          "قم بالغسل قبل الإحرام",
          "هذا هو بداية عبادتك المقدسة",
        ],
        commonMistakes: [
          "الإحرام بعد تجاوز حدود الميقات",
          "عدم وضوح النية",
          "ارتداء ملابس مخيطة في الإحرام",
        ],
      },
      ur: {
        title: "✈️ سفر اور احرام",
        description:
          "اپنے سفر کی نیت کے ساتھ شروعات کریں۔ میقات سے پہلے احرام باندھیں اور تلبیہ پڑھنا شروع کریں۔",
        tips: [
          'واضح نیت کریں: "لبیک اللہم عمرہ"',
          'تلبیہ پڑھنا شروع کریں: "لبیک اللہم لبیک..."',
          "سفید بغیر سلے ہوئے احرام کے کپڑے پہنیں",
          "احرام سے پہلے غسل کریں",
          "یہ آپ کی مقدس عبادت کا آغاز ہے",
        ],
        commonMistakes: [
          "میقات کے بعد احرام باندھنا",
          "نیت واضح نہ کرنا",
          "احرام میں سلے ہوئے کپڑے پہننا",
        ],
      },
    },
  },
  {
    sequence: 2,
    key: "masjid-entry",
    isRequired: true,
    estimatedDuration: "10-15 min",
    icon: "🕌",
    translations: {
      en: {
        title: "🕌 Masjid al-Haram Entry",
        description:
          "Enter the holy mosque with the right foot first and offer supplications.",
        tips: [
          "Enter with right foot first - a Sunnah practice",
          "Look at the Kaaba and make sincere supplications",
          "This moment of seeing the Kaaba is very important spiritually",
          "Feel the sanctity and presence of Allah's House",
          "Make your heart ready for the sacred rituals ahead",
        ],
        commonMistakes: [
          "Entering with left foot",
          "Not making sincere dua at this moment",
          "Not appreciating the spiritual importance",
        ],
      },
      ar: {
        title: "🕌 دخول المسجد الحرام",
        description: "ادخل المسجد المقدس برجلك اليمنى أولاً وقدِّم الدعاء.",
        tips: [
          "ادخل برجلك اليمنى - سنة من الأنبياء",
          "انظر إلى الكعبة وادعُ بإخلاص",
          "هذه لحظة رؤية الكعبة مهمة روحياً جداً",
          "شعر بقدسية بيت الله",
          "حضِّر قلبك للعبادات المقدسة",
        ],
        commonMistakes: [
          "الدخول برجل اليسرى",
          "عدم الدعاء بإخلاص",
          "عدم تقدير الأهمية الروحية",
        ],
      },
      ur: {
        title: "🕌 مسجد الحرام میں داخل ہونا",
        description:
          "مقدس مسجد میں دایاں پاؤں پہلے رکھ کر داخل ہوں اور دعا کریں۔",
        tips: [
          "دایاں پاؤں پہلے رکھ کر داخل ہوں - سنت ہے",
          "کعبے کو دیکھ کر خالصانہ دعا کریں",
          "کعبہ دیکھنا روحانی لحاظ سے بہت اہم ہے",
          "اللہ کے گھر کی پاکیزگی محسوس کریں",
          "آگے کی مقدس عبادتوں کے لیے اپنا دل تیار کریں",
        ],
        commonMistakes: [
          "بائیں پاؤں سے داخل ہونا",
          "خالصانہ دعا نہ کرنا",
          "روحانی اہمیت کو نہ سمجھنا",
        ],
      },
    },
  },
  {
    sequence: 3,
    key: "tawaf",
    isRequired: true,
    estimatedDuration: "30-45 min",
    icon: "🔄",
    translations: {
      en: {
        title: "🔄 Tawaf (7 Rounds)",
        description:
          "Circumambulate the Kaaba seven times in reverence and worship of Allah's House.",
        tips: [
          "Start from the Black Stone (Hajr-e-Aswad)",
          "Complete 7 full circles around the Kaaba",
          "Keep the Kaaba on your left side",
          "Make continuous dua and dhikr during Tawaf",
          "Tawaf is the honor and worship of Allah's sacred house",
        ],
        commonMistakes: [
          "Going clockwise instead of counterclockwise",
          "Not completing all 7 rounds",
          "Losing count during the circles",
          "Breaking ritual purity during Tawaf",
        ],
      },
      ar: {
        title: "🔄 الطواف (7 أشواط)",
        description: "قم بـ 7 أشواط حول الكعبة بتعظيم وعبادة بيت الله.",
        tips: [
          "ابدأ من الحجر الأسود",
          "أكمل 7 أشواط كاملة حول الكعبة",
          "اترك الكعبة على يسارك",
          "قدِّم الدعاء والذكر المستمر أثناء الطواف",
          "الطواف هو تعظيم وعبادة بيت الله المقدس",
        ],
        commonMistakes: [
          "المشي في اتجاه الساعة بدلاً من العكس",
          "عدم إكمال 7 أشواط",
          "فقدان العد أثناء الأشواط",
          "فقدان الطهارة أثناء الطواف",
        ],
      },
      ur: {
        title: "🔄 طواف (7 چکر)",
        description:
          "اللہ کے گھر کی تعظیم اور عبادت میں کعبہ کے سات چکر لگائیں۔",
        tips: [
          "سیاہ پتھر (حجرِ اسود) سے شروع کریں",
          "کعبہ کے گرد 7 مکمل چکر لگائیں",
          "کعبہ کو اپنی بائیں طرف رکھیں",
          "طواف کے دوران مسلسل دعا اور ذکر کریں",
          "طواف اللہ کے گھر کی تعظیم اور عبادت ہے",
        ],
        commonMistakes: [
          "گھڑی کی سمت میں چلنا",
          "7 چکر مکمل نہ کرنا",
          "چکر لگاتے ہوئے گنتی کھونا",
          "طواف کے دوران پاکی نہ رہنا",
        ],
      },
    },
  },
  {
    sequence: 4,
    key: "prayer-maqam",
    isRequired: true,
    estimatedDuration: "10-15 min",
    icon: "🙏",
    translations: {
      en: {
        title: "🙏 Namaz (Maqam-e-Ibrahim)",
        description:
          "Offer 2 rakat prayers after Tawaf as a sign of gratitude and submission to Allah.",
        tips: [
          "Pray 2 rakat behind Maqam-e-Ibrahim after Tawaf",
          "This prayer is Sunnah and part of the Tawaf ritual",
          "Perform with full concentration and mindfulness",
          "Make dua after completing the prayer",
          "This is a form of worshiping Allah's greatness",
        ],
        commonMistakes: [
          "Praying too far from Maqam-e-Ibrahim",
          "Rushing through the prayer",
          "Not making the intention clear",
        ],
      },
      ar: {
        title: "🙏 الصلاة (مقام إبراهيم)",
        description: "صلِ ركعتين بعد الطواف كشكر وخضوع لله.",
        tips: [
          "صلِ ركعتين خلف مقام إبراهيم بعد الطواف",
          "هذه الصلاة سنة وجزء من الطواف",
          "صلِ بتركيز وخشوع كامل",
          "ادعُ بعد انتهاء الصلاة",
          "هذا عبادة لعظمة الله",
        ],
        commonMistakes: [
          "الصلاة بعيداً عن مقام إبراهيم",
          "الاستعجال في الصلاة",
          "عدم وضوح النية",
        ],
      },
      ur: {
        title: "🙏 نماز (مقام ابراہیم)",
        description:
          "طواف کے بعد اللہ کے شکر اور سجدے کے لیے 2 رکعت نماز پڑھیں۔",
        tips: [
          "طواف کے بعد مقام ابراہیم کے پیچھے 2 رکعت پڑھیں",
          "یہ نماز سنت ہے اور طواف کا حصہ ہے",
          "مکمل توجہ اور خشوع کے ساتھ نماز پڑھیں",
          "نماز کے بعد دعا کریں",
          "یہ اللہ کی عظمت کی پوجا ہے",
        ],
        commonMistakes: [
          "مقام سے بہت دور نماز پڑھنا",
          "نماز میں جلدی کرنا",
          "نیت واضح نہ کرنا",
        ],
      },
    },
  },
  {
    sequence: 5,
    key: "sai",
    isRequired: true,
    estimatedDuration: "20-30 min",
    icon: "🏃",
    translations: {
      en: {
        title: "🏃 Sa'i (Safa – Marwah)",
        description:
          "Walk 7 times between Safa and Marwah, remembering the journey of Hazrat Hagar.",
        tips: [
          "Start from Safa and end at Marwah",
          "Complete 7 full rounds between the hills",
          "Increase your pace between the green pillars",
          "Make dua and dhikr throughout Sa'i",
          "This commemorates the sacrifice and trust of Hazrat Hagar (A.S)",
        ],
        commonMistakes: [
          "Starting from Marwah instead of Safa",
          "Losing count of the rounds",
          "Not walking between correct boundaries",
          "Breaking ritual purity during Sa'i",
        ],
      },
      ar: {
        title: "🏃 السعي (الصفا والمروة)",
        description: "امشِ 7 مرات بين الصفا والمروة تخليداً لذكرى هاجر.",
        tips: [
          "ابدأ من الصفا وانتهِ عند المروة",
          "أكمل 7 أشواط كاملة بين التلين",
          "زد السرعة بين الأعمدة الخضراء",
          "ادعُ وسبِّح طوال السعي",
          "هذا تذكر لتضحية وثقة هاجر عليها السلام",
        ],
        commonMistakes: [
          "البدء من المروة بدلاً من الصفا",
          "فقدان العد",
          "عدم المشي في الحدود الصحيحة",
          "فقدان الطهارة أثناء السعي",
        ],
      },
      ur: {
        title: "🏃 سعی (صفا – مروہ)",
        description:
          "حضرت ہاجر کی یادگاری میں صفا اور مروہ کے درمیان 7 بار سعی کریں۔",
        tips: [
          "صفا سے شروع کریں اور مروہ پر ختم کریں",
          "پہاڑیوں کے درمیان 7 مکمل چکر لگائیں",
          "سبز ستونوں کے درمیان رفتار تیز کریں",
          "سعی کے دوران مسلسل دعا اور ذکر کریں",
          "یہ حضرت ہاجر کی قربانی اور توکل کی یادگاری ہے",
        ],
        commonMistakes: [
          "صفا کی بجائے مروہ سے شروع کرنا",
          "گنتی کھونا",
          "درست حدود میں نہ چلنا",
          "سعی کے دوران پاکی نہ رہنا",
        ],
      },
    },
  },
  {
    sequence: 6,
    key: "hair-cutting",
    isRequired: true,
    estimatedDuration: "10-20 min",
    icon: "✂️",
    translations: {
      en: {
        title: "✂️ Halq / Taqsir (Hair Cutting)",
        description:
          "Shave or trim your hair to complete the Ihram state and conclude Umrah.",
        tips: [
          "Men: Shave your head completely (Halq) or trim hair (Taqsir)",
          "Women: Trim a few strands of hair (Taqsir only)",
          "After this, your Umrah is complete",
          "Seek a professional barber if available",
          "This final step exits you from the state of Ihram",
        ],
        commonMistakes: [
          "Women shaving their head completely",
          "Not cutting enough hair",
          "Using unsterilized tools",
          "Rushing the process",
        ],
      },
      ar: {
        title: "✂️ الحلق / التقصير (قص الشعر)",
        description: "احلق أو قصِّر شعرك لإكمال الإحرام واختتام العمرة.",
        tips: [
          "الرجال: احلقوا رؤوسكم كاملاً أو قصّروا الشعر",
          "النساء: قصّن عدة خصلات من الشعر فقط",
          "بعد هذا تكتمل عمرتك",
          "اطلبوا من حلاق محترف إذا أمكن",
          "هذه الخطوة الأخيرة تخرجك من حالة الإحرام",
        ],
        commonMistakes: [
          "حلق النساء رؤوسهن بالكامل",
          "عدم قص شعر كافٍ",
          "استخدام أدوات غير معقمة",
          "الاستعجال في العملية",
        ],
      },
      ur: {
        title: "✂️ حلق / تقصیر (بال کاٹنا)",
        description:
          "احرام کی تکمیل اور عمرہ کو ختم کرنے کے لیے بال منڈوائیں یا کاٹ لیں۔",
        tips: [
          "مردوں: اپنا سر مکمل طور پر منڈوائیں یا بال کاٹیں",
          "خواتین: شعر کے کچھ تارے کاٹیں",
          "اس کے بعد آپ کا عمرہ مکمل ہو جاتا ہے",
          "اگر ممکن ہو تو پیشہ ور ناپ سے مدد لیں",
          "یہ آخری مرحلہ آپ کو احرام سے نکال دیتا ہے",
        ],
        commonMistakes: [
          "خواتین کے سر کو مکمل طور پر منڈوانا",
          "کافی بال نہ کاٹنا",
          "غیر معقم اوزار استعمال کرنا",
          "عمل میں جلدی کرنا",
        ],
      },
    },
  },
  {
    sequence: 7,
    key: "masjid-visits",
    isRequired: false,
    icon: "🕌",
    estimatedDuration: "1-2 hours",
    translations: {
      en: {
        title: "Visiting Masjid al-Haram",
        description:
          "Spend time in the main Masjid al-Haram for additional prayers and spiritual connection.",
        tips: [
          "Visit during quieter times if possible",
          "Perform additional salah and remember Allah",
          "Be respectful of other worshippers",
          "Take time for personal dua and reflection",
        ],
        commonMistakes: [
          "Being disrespectful to the sacred space",
          "Taking photos inappropriately",
          "Disturbing others in prayer",
        ],
      },
      ar: {
        title: "زيارة المسجد الحرام",
        description:
          "اقضِ وقتاً في المسجد الحرام للصلاة الإضافية والاتصال الروحي.",
        tips: [
          "زر عندما تكون أوقات أهدأ",
          "قم بصلوات إضافية وذكر الله",
          "احترم العابدين الآخرين",
          "خذ وقتاً للدعاء الشخصي والتأمل",
        ],
        commonMistakes: [
          "عدم احترام المكان المقدس",
          "التقاط صور بشكل غير مناسب",
          "إزعاج الآخرين في الصلاة",
        ],
      },
      ur: {
        title: "مسجد الحرام کا دورہ",
        description:
          "اضافی نماز اور روحانی رابطے کے لیے مسجد الحرام میں وقت گزاریں۔",
        tips: [
          "اگر ممکن ہو تو پرسرار اوقات میں دورہ کریں",
          "اضافی نماز ادا کریں اور اللہ کو یاد کریں",
          "دوسری نمازیوں سے احترام کریں",
          "ذاتی دعا اور غور و فکر کے لیے وقت نکالیں",
        ],
        commonMistakes: [
          "مقدس جگہ کی بے احترامی",
          "غلط طریقے سے تصویریں لینا",
          "دوسروں کی نماز میں خلل ڈالنا",
        ],
      },
    },
  },
  {
    sequence: 8,
    key: "zamzam",
    isRequired: false,
    icon: "💧",
    estimatedDuration: "10-15 min",
    translations: {
      en: {
        title: "Drinking Zamzam Water",
        description:
          "Drink the blessed water of Zamzam with intention for health and spiritual benefit.",
        tips: [
          "Drink with your right hand",
          "Make intention for health and spiritual benefit",
          "Drink slowly and mindfully",
          "Share Zamzam water with family if possible",
        ],
        commonMistakes: [
          "Wasting water",
          "Not making intention",
          "Drinking with left hand",
        ],
      },
      ar: {
        title: "شرب ماء زمزم",
        description: "اشرب ماء زمزم المبارك بنية الشفاء والفائدة الروحية.",
        tips: [
          "اشرب بيدك اليمنى",
          "انوِ الشفاء والفائدة الروحية",
          "اشرب ببطء وتأمل",
          "شارك ماء زمزم مع العائلة إن أمكن",
        ],
        commonMistakes: ["هدر الماء", "عدم نية", "الشرب بيدك اليسرى"],
      },
      ur: {
        title: "زمزم کا پانی پینا",
        description:
          "صحت اور روحانی فائدے کی نیت کے ساتھ زمزم کا مبارک پانی پیں۔",
        tips: [
          "اپنے دائیں ہاتھ سے پیں",
          "شفاء اور روحانی فائدے کی نیت کریں",
          "آہستہ اور توجہ سے پیں",
          "اگر ممکن ہو تو خاندار کے ساتھ زمزم شیئر کریں",
        ],
        commonMistakes: [
          "پانی کو ضائع کرنا",
          "نیت نہ کرنا",
          "بائیں ہاتھ سے پینا",
        ],
      },
    },
  },
  {
    sequence: 9,
    key: "final-dua",
    isRequired: true,
    icon: "🙏",
    estimatedDuration: "15-30 min",
    translations: {
      en: {
        title: "Final Dua and Completion",
        description:
          "Make final supplications near the Kaaba to complete your Umrah.",
        tips: [
          "Face the Kaaba for your final dua",
          "Ask Allah for forgiveness and blessings",
          "Thank Allah for completing Umrah",
          "Make personal duas for yourself and loved ones",
          "Take time for quiet reflection",
        ],
        commonMistakes: [
          "Rushing through the final dua",
          "Not facing the Kaaba",
          "Forgetting to thank Allah",
        ],
      },
      ar: {
        title: "الدعاء النهائي والاكتمال",
        description: "قدِّم الدعاء النهائي بالقرب من الكعبة لإكمال عمرتك.",
        tips: [
          "استقبل الكعبة للدعاء النهائي",
          "اطلب المغفرة والبركة من الله",
          "اشكر الله على إكمال العمرة",
          "قدِّم أدعية شخصية لنفسك والأحبة",
          "خذ وقتاً للتأمل الهادئ",
        ],
        commonMistakes: [
          "الاستعجال في الدعاء النهائي",
          "عدم استقبال الكعبة",
          "نسيان شكر الله",
        ],
      },
      ur: {
        title: "آخری دعا اور مکمل ہونا",
        description:
          "اپنے عمرے کو مکمل کرنے کے لیے خانہ کعبہ کے قریب آخری دعا کریں۔",
        tips: [
          "آخری دعا کے لیے خانہ کعبہ کا رخ کریں",
          "اللہ سے معافی اور برکت مانگیں",
          "عمرے کی تکمیل پر اللہ کا شکریہ ادا کریں",
          "اپنے اور پیاروں کے لیے ذاتی دعائیں کریں",
          "خاموش غور و فکر کے لیے وقت لیں",
        ],
        commonMistakes: [
          "آخری دعا میں جلدی کرنا",
          "خانہ کعبہ کا رخ نہ کرنا",
          "اللہ کا شکریہ بھولنا",
        ],
      },
    },
  },
];

async function seedRituals() {
  try {
    const mongoUri = process.env.DATABASE_URL || "";
    await mongoose.connect(mongoUri);

    await Ritual.deleteMany({});
    await Ritual.insertMany(ritualData);

    console.log("✓ Rituals seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("✗ Seed failed:", error);
    process.exit(1);
  }
}

seedRituals();
