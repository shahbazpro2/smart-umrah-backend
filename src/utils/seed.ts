import "dotenv/config";
import mongoose from "mongoose";
import Ritual from "../models/Ritual";
import ElderlyGuide from "../models/ElderlyGuide";
import MistakeGuide from "../models/MistakeGuide";

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

const elderlyGuideData = [
  {
    ritualKey: "safar-ihram",
    isModified: true,
    healthWarnings: [
      "Those with mobility issues should arrange transportation assistance",
      "Individuals with respiratory issues may find heat challenging",
      "Consult your doctor before travel if you have heart conditions",
    ],
    translations: {
      en: {
        title: "Safar & Ihram - Elderly Modifications",
        description:
          "Special guidance for elderly pilgrims during the journey and Ihram.",
        modifications: [
          "Travel during cooler parts of the day if possible",
          "Arrange for wheelchair or mobility assistance at airports",
          "Wear comfortable, lightweight Ihram garments",
          "Use walking aids if needed - there is no prohibition",
          "Stay hydrated throughout the journey",
        ],
        restBreaks: {
          recommendedMinutes: 30,
          position: "Seated with feet elevated",
        },
        physicalConsiderations: [
          "Joint pain and arthritis may be aggravated by long flights",
          "Dehydration is a greater risk in elderly pilgrims",
          "Medication schedules may need adjustment for time zones",
          "Blood pressure may fluctuate with travel stress and temperature changes",
        ],
        accompaniments: [
          "Bring a trusted family member or caregiver",
          "Carry all medications in original containers",
          "Have medical reports and prescriptions available",
          "Wear medical alert identification",
          "Keep emergency contact numbers easily accessible",
        ],
        emergencyTips: [
          "Know the location of nearest medical facilities",
          "Seek help immediately if experiencing chest pain or shortness of breath",
          "Stay close to your group or caregiver",
          "Use rest areas and benches provided in the Haram",
          "Inform officials if you become separated from your group",
        ],
      },
      ar: {
        title: "السفر والإحرام - تعديلات للمسنين",
        description:
          "إرشادات خاصة للحجاج المسنين أثناء الرحلة والإحرام.",
        modifications: [
          "السفر خلال أوقات أكثر برودة إن أمكن",
          "ترتيب المساعدة في الوصول إلى المطار",
          "ارتداء ملابس إحرام مريحة وخفيفة الوزن",
          "استخدام أدوات المشي إذا لزم الأمر",
          "البقاء رطباً طوال الرحلة",
        ],
        restBreaks: {
          recommendedMinutes: 30,
          position: "الجلوس مع رفع القدمين",
        },
        physicalConsiderations: [
          "آلام المفاصل قد تزداد سوءاً برحلات طويلة",
          "الجفاف أكثر خطورة للحجاج المسنين",
          "قد تحتاج جداول الأدوية إلى تعديل لتغيير المناطق الزمنية",
          "قد يتغير ضغط الدم مع إجهاد السفر ودرجة الحرارة",
        ],
        accompaniments: [
          "جلب فرد من العائلة أو مرافق موثوق",
          "حمل جميع الأدوية في الحاويات الأصلية",
          "وجود تقارير طبية وروشتات متاحة",
          "ارتداء معرف إنذار طبي",
          "إتاحة أرقام الاتصال الطارئة",
        ],
        emergencyTips: [
          "معرفة موقع أقرب مرافق طبية",
          "طلب المساعدة فوراً إذا شعرت بألم في الصدر",
          "البقاء قريباً من مجموعتك أو مرافقك",
          "استخدام مناطق الراحة المتاحة",
          "إبلاغ المسؤولين إذا انفصلت عن مجموعتك",
        ],
      },
      ur: {
        title: "سفر اور احرام - بزرگ ہاجیوں کے لیے ترمیمات",
        description:
          "سفر اور احرام کے دوران بزرگ حاجیوں کے لیے خصوصی رہنمائی۔",
        modifications: [
          "اگر ممکن ہو تو سردی کے وقت سفر کریں",
          "ہوائی اڈے پر معاونت کا انتظام کریں",
          "آرام دہ اور ہلکے احرام کے کپڑے پہنیں",
          "اگر ضروری ہو تو چلنے کی معاونت استعمال کریں",
          "پوری سفر میں پانی پیتے رہیں",
        ],
        restBreaks: {
          recommendedMinutes: 30,
          position: "بیٹھے ہوئے پاؤں اوپر کریں",
        },
        physicalConsiderations: [
          "جوڑوں کا درد لمبی سفر سے بڑھ سکتا ہے",
          "بزرگ حاجیوں کے لیے پانی کی کمی زیادہ خطرناک ہے",
          "ادویات کی وقت میں تبدیلی درکار ہو سکتی ہے",
          "سفر کے تناؤ سے بلڈ پریشر متبدل ہو سکتا ہے",
        ],
        accompaniments: [
          "خاندان کے سدھے ہوئے رکن یا معاون کو ساتھ لائیں",
          "تمام ادویات اصل کنٹینرز میں رکھیں",
          "طبی رپورٹس اور نسخہ دستیاب رکھیں",
          "طبی الرٹ شناخت پہنیں",
          "ایمرجنسی نمبر آسانی سے دستیاب رکھیں",
        ],
        emergencyTips: [
          "قریب ترین طبی سہولیات کی جگہ معلوم کریں",
          "سینے میں درد ہو تو فوری مدد لیں",
          "اپنے گروپ کے ساتھ قریب رہیں",
          "فراہم کردہ آرام کی جگہوں استعمال کریں",
          "اگر گروپ سے الگ ہوں تو اہل کار کو بتائیں",
        ],
      },
    },
  },
  {
    ritualKey: "tawaf",
    isModified: true,
    healthWarnings: [
      "Tawaf involves continuous walking which can strain elderly joints",
      "Heat and crowding in the Haram can cause heat exhaustion",
      "Standing for long periods can cause dizziness or fatigue",
      "Consult with doctors about pain management before arrival",
    ],
    translations: {
      en: {
        title: "Tawaf - Elderly Modifications",
        description:
          "Elderly pilgrims may need modifications during Tawaf due to physical limitations.",
        modifications: [
          "Perform Tawaf during less crowded times (early morning or late evening)",
          "Use the outer circles of the Haram for easier movement",
          "Take breaks between rounds if needed - spread Tawaf over multiple days",
          "Use a walking stick for support and stability",
          "Perform Tawaf slowly - there is no speed requirement",
        ],
        restBreaks: {
          recommendedMinutes: 15,
          position: "Seated on available benches, keep legs elevated",
        },
        physicalConsiderations: [
          "Arthritis and joint pain are common challenges",
          "Fatigue and dizziness may occur in heat and humidity",
          "Continuous standing can cause swelling in feet and legs",
          "Crowding may cause balance issues",
        ],
        accompaniments: [
          "Have a caregiver stay within sight at all times",
          "Bring a folding stool for rest periods",
          "Carry water and electrolyte drinks",
          "Use comfortable, supportive footwear",
          "Consider a scarf for head protection from sun",
        ],
        emergencyTips: [
          "Sit down immediately if feeling faint or dizzy",
          "Hydrate regularly throughout Tawaf",
          "Use paramedics or guards if feeling unwell",
          "Don't push yourself - rest is also worship",
          "There is no shame in taking rest breaks during Tawaf",
        ],
      },
      ar: {
        title: "الطواف - تعديلات للمسنين",
        description:
          "قد يحتاج الحجاج المسنون إلى تعديلات أثناء الطواف.",
        modifications: [
          "قم بالطواف في أوقات أقل ازدحاماً",
          "استخدم الأوساط الخارجية للحرم",
          "خذ فترات راحة بين الأشواط",
          "استخدم العصا للدعم والاستقرار",
          "قم بالطواف ببطء - لا توجد سرعة مطلوبة",
        ],
        restBreaks: {
          recommendedMinutes: 15,
          position: "الجلوس على المقاعد المتاحة",
        },
        physicalConsiderations: [
          "التهاب المفاصل شائع جداً",
          "التعب والدوار قد يحدثان",
          "الوقوف المستمر قد يسبب انتفاخاً",
        ],
        accompaniments: [
          "وجود مرافق قريب في كل الأوقات",
          "حمل مقعد قابل للطي",
          "حمل المياه والمشروبات",
          "ارتداء أحذية مريحة وداعمة",
        ],
        emergencyTips: [
          "اجلس فوراً إذا شعرت بدوار",
          "اشرب الماء بانتظام",
          "استخدم الإسعاف أو الحراس إذا شعرت بعدم الارتياح",
          "لا تجهد نفسك - الراحة أيضاً عبادة",
        ],
      },
      ur: {
        title: "طواف - بزرگ ہاجیوں کے لیے ترمیمات",
        description: "بزرگ حاجیوں کو طواف میں ترمیمات درکار ہو سکتی ہیں۔",
        modifications: [
          "کم بھیڑ کے وقت طواف کریں",
          "حرم کے بیرونی حصے استعمال کریں",
          "دور دور میں آرام کریں",
          "چھڑی استعمال کریں",
          "سست رفتار سے طواف کریں",
        ],
        restBreaks: {
          recommendedMinutes: 15,
          position: "دستیاب بینچ پر بیٹھیں",
        },
        physicalConsiderations: [
          "جوڑوں کا درد عام مسئلہ ہے",
          "تھکاوٹ اور چکر آ سکتے ہیں",
          "مسلسل کھڑے ہونے سے پیروں میں سوجن",
        ],
        accompaniments: [
          "معاون ہمیشہ قریب رہے",
          "قابل جوڑ نشست لے کر چلیں",
          "پانی اور مشروبات ساتھ رکھیں",
          "آرام دہ جوتے پہنیں",
        ],
        emergencyTips: [
          "چکر آئیں تو فوری بیٹھ جائیں",
          "بار بار پانی پیں",
          "اگر بیمار ہوں تو فوری مدد لیں",
          "اپنے آپ کو زیادہ مت دھکیلیں",
          "آرام بھی عبادت ہے",
        ],
      },
    },
  },
];

const mistakeGuideData = [
  {
    ritualKey: "safar-ihram",
    severity: "high",
    translations: {
      en: {
        title: "Common Mistakes in Safar & Ihram",
        description: "Avoid these common mistakes when beginning your Umrah journey with Ihram.",
        commonMistakes: [
          {
            mistake: "Making Ihram after passing Miqat boundary",
            impact: "Your Ihram will be invalid. You must repeat it at the correct location or perform Damm (penalty).",
            prevention: "Know your Miqat location before travel. Perform Ihram before crossing the boundary.",
          },
          {
            mistake: "Not making clear intention (Niyyah)",
            impact: "Your worship may not be accepted. Ihram requires clear intention for it to be valid.",
            prevention: "Make a clear verbal or mental intention before wearing Ihram garments.",
          },
          {
            mistake: "Wearing sewn clothes in Ihram",
            impact: "You have violated Ihram rules. You must pay Damm and avoid sewn garments.",
            prevention: "Wear only unsewn white garments. Avoid shirts, pants, underwear with seams.",
          },
          {
            mistake: "Perfuming yourself before or during Ihram",
            impact: "You have violated Ihram. You must offer expiation (Damm) for this violation.",
            prevention: "Avoid all perfumes, scented oils, and fragrances during Ihram period.",
          },
        ],
        tips: [
          "Research your Miqat location in advance (by plane, car, or sea)",
          "Perform Ghusl (ritual bath) at home or the airport before Ihram",
          "Make intention verbally or mentally with clear heart",
          "Start Talbiyah immediately after entering Ihram",
          "Keep your Ihram garments clean and modest",
        ],
      },
      ar: {
        title: "الأخطاء الشائعة في السفر والإحرام",
        description: "تجنب هذه الأخطاء الشائعة عند بدء رحلة العمرة بالإحرام.",
        commonMistakes: [
          {
            mistake: "الإحرام بعد تجاوز حدود الميقات",
            impact: "إحرامك سيكون غير صحيح. يجب عليك إعادة الإحرام في المكان الصحيح أو إهداء هدية.",
            prevention: "اعرف موقع ميقاتك قبل السفر. قم بالإحرام قبل تجاوز الحدود.",
          },
          {
            mistake: "عدم التقيد بنية واضحة",
            impact: "قد لا يتم قبول عبادتك. الإحرام يتطلب نية واضحة حتى يكون صحيحاً.",
            prevention: "انوِ نية واضحة لسانية أو قلبية قبل ارتداء ملابس الإحرام.",
          },
        ],
        tips: [
          "ابحث عن موقع ميقاتك مسبقاً",
          "قم بالغسل قبل الإحرام في البيت أو المطار",
          "انوِ النية واضحة بقلب سليم",
          "ابدأ التلبية فوراً عند الإحرام",
          "حافظ على ملابس الإحرام نظيفة وحشمة",
        ],
      },
      ur: {
        title: "سفر اور احرام میں عام غلطیاں",
        description: "عمرے کی شروعات میں احرام کے دوران ان عام غلطیوں سے بچیں۔",
        commonMistakes: [
          {
            mistake: "میقات کی حدود سے آگے جا کر احرام باندھنا",
            impact: "آپ کا احرام غلط ہوگا۔ آپ کو صحیح جگہ سے دوبارہ احرام باندھنا ہوگا یا قربانی دینی ہوگی۔",
            prevention: "سفر سے پہلے اپنی میقات کی جگہ معلوم کریں۔ حدود سے پہلے احرام باندھیں۔",
          },
        ],
        tips: [
          "پہلے سے اپنی میقات کی جگہ معلوم کریں",
          "احرام سے پہلے غسل کریں",
          "واضح نیت کے ساتھ احرام باندھیں",
          "احرام کے بعد فوری تلبیہ شروع کریں",
        ],
      },
    },
  },
  {
    ritualKey: "masjid-entry",
    severity: "medium",
    translations: {
      en: {
        title: "Common Mistakes in Masjid Entry",
        description: "Ensure proper respect and etiquette when entering Masjid al-Haram.",
        commonMistakes: [
          {
            mistake: "Entering with left foot first",
            impact: "You miss the Sunnah of the Prophet (peace be upon him).",
            prevention: "Always enter with your right foot first while reciting the Dua.",
          },
          {
            mistake: "Not making sincere dua upon seeing the Kaaba",
            impact: "You miss the spiritual significance of this moment.",
            prevention: "Make heartfelt supplications and dua when you first see the Kaaba.",
          },
        ],
        tips: [
          "Enter with right foot while saying: 'Allahumma assalamu alai ala Nabika...'",
          "Look at the Kaaba with reverence and awe",
          "Make sincere dua for yourself and your loved ones",
          "Take time to feel the spiritual presence of Allah's House",
          "Be mindful and focused as you enter the sacred sanctuary",
        ],
      },
      ar: {
        title: "الأخطاء الشائعة في دخول المسجد",
        description: "تأكد من الاحترام والآداب عند الدخول إلى المسجد الحرام.",
        commonMistakes: [
          {
            mistake: "الدخول برجل اليسرى أولاً",
            impact: "تفوت عليك سنة النبي صلى الله عليه وسلم.",
            prevention: "ادخل دائماً برجلك اليمنى أولاً مع قراءة الدعاء.",
          },
          {
            mistake: "عدم الدعاء بإخلاص عند رؤية الكعبة",
            impact: "تفوت عليك الأهمية الروحية لهذه اللحظة.",
            prevention: "اطلب من الله بقلب صادق عند رؤيتك للكعبة الشريفة.",
          },
        ],
        tips: [
          "ادخل برجلك اليمنى وأنت تقول الدعاء",
          "انظر إلى الكعبة باحترام وخشوع",
          "ادعُ بإخلاص لنفسك والأحبة",
          "خذ وقتاً لتشعر بحضور الله في بيته",
          "كن متركزاً وخاشعاً وأنت تدخل المسجد الحرام",
        ],
      },
      ur: {
        title: "مسجد الحرام میں داخل ہونے میں عام غلطیاں",
        description: "مسجد الحرام میں داخل ہوتے وقت صحیح احترام اور ادب کو یقینی بنائیں۔",
        commonMistakes: [
          {
            mistake: "بائیں پاؤں سے پہلے داخل ہونا",
            impact: "آپ نبی صلی اللہ علیہ وسلم کی سنت سے محروم رہتے ہیں۔",
            prevention: "ہمیشہ دایاں پاؤں پہلے رکھ کر دعا پڑھتے ہوئے داخل ہوں۔",
          },
          {
            mistake: "کعبہ دیکھ کر خالصانہ دعا نہ کرنا",
            impact: "آپ اس لمحے کی روحانی اہمیت سے محروم رہتے ہیں۔",
            prevention: "جب کعبہ دیکھیں تو دل سے اللہ سے دعا کریں۔",
          },
        ],
        tips: [
          "دایاں پاؤں پہلے رکھ کر دعا پڑھتے ہوئے داخل ہوں",
          "کعبہ کو احترام اور خشوع کے ساتھ دیکھیں",
          "اپنے اور پیاروں کے لیے دعا کریں",
          "اللہ کے گھر میں اس کی موجودگی محسوس کریں",
          "مسجد الحرام میں داخل ہوتے ہوئے توجہ مند رہیں",
        ],
      },
    },
  },
  {
    ritualKey: "tawaf",
    severity: "critical",
    translations: {
      en: {
        title: "Critical Mistakes in Tawaf",
        description: "Avoid these critical mistakes during Tawaf (circumambulation) around the Kaaba.",
        commonMistakes: [
          {
            mistake: "Walking clockwise instead of counter-clockwise",
            impact: "Your Tawaf is invalid and does not count. You must repeat all seven rounds.",
            prevention: "Always keep the Kaaba on your left side. Walk counter-clockwise around it.",
          },
          {
            mistake: "Not completing all seven full rounds",
            impact: "Your Tawaf is incomplete and invalid. You must start over with all seven rounds.",
            prevention: "Count each round carefully. Complete at least 7 full circles around the Kaaba.",
          },
          {
            mistake: "Losing count during the circles",
            impact: "You may complete an incorrect number of rounds, invalidating your Tawaf.",
            prevention: "Use a counter or keep track mentally. Count on your fingers for each round.",
          },
          {
            mistake: "Breaking ritual purity (Wudu) during Tawaf",
            impact: "Your Tawaf becomes invalid and must be repeated with fresh Wudu.",
            prevention: "Maintain ablution throughout. If you break it, leave and perform Wudu again.",
          },
        ],
        tips: [
          "Start from the Black Stone (Hajr-e-Aswad) corner",
          "Maintain ablution (Wudu) throughout Tawaf",
          "Keep the Kaaba on your left side at all times",
          "Make continuous dua and dhikr while walking",
          "Be respectful and mindful of other pilgrims around you",
        ],
      },
      ar: {
        title: "الأخطاء الحرجة في الطواف",
        description: "تجنب هذه الأخطاء الحرجة أثناء الطواف حول الكعبة.",
        commonMistakes: [
          {
            mistake: "المشي في اتجاه الساعة بدلاً من عكسها",
            impact: "طوافك غير صحيح ولا يعتد به. يجب عليك إعادة جميع الأشواط السبعة.",
            prevention: "أبقِ الكعبة على يسارك دائماً. امشِ عكس اتجاه عقارب الساعة حولها.",
          },
          {
            mistake: "عدم إكمال جميع الأشواط السبعة الكاملة",
            impact: "طوافك غير مكتمل وغير صحيح. يجب عليك البدء مجدداً من جديد.",
            prevention: "عد كل شوط بعناية. أكمل 7 أشواط كاملة حول الكعبة.",
          },
        ],
        tips: [
          "ابدأ من الحجر الأسود",
          "حافظ على الوضوء طوال فترة الطواف",
          "اترك الكعبة على يسارك دائماً",
          "قدِّم الدعاء والذكر المستمر",
          "احترم باقي الحجاج والمصلين",
        ],
      },
      ur: {
        title: "طواف میں شدید غلطیاں",
        description: "خانہ کعبہ کے گرد طواف کے دوران ان شدید غلطیوں سے بچیں۔",
        commonMistakes: [
          {
            mistake: "گھڑی کی سمت میں چلنا",
            impact: "آپ کی طواف غلط ہے۔ آپ کو تمام سات چکر دوبارہ کرنے ہوں گے۔",
            prevention: "کعبہ کو ہمیشہ بائیں طرف رکھیں۔ گھڑی کے برعکس چلیں۔",
          },
          {
            mistake: "تمام سات چکر مکمل نہ کرنا",
            impact: "آپ کی طواف نامکمل اور غلط ہے۔ دوبارہ شروع کریں۔",
            prevention: "ہر چکر کو احتیاط سے گنیں۔ کعبہ کے ارد گرد 7 چکر مکمل کریں۔",
          },
        ],
        tips: [
          "سیاہ پتھر سے شروع کریں",
          "طواف کے دوران وضو برقرار رکھیں",
          "کعبہ کو ہمیشہ بائیں طرف رکھیں",
          "مسلسل دعا اور ذکر کریں",
          "دوسرے حاجیوں کا احترام کریں",
        ],
      },
    },
  },
  {
    ritualKey: "prayer-maqam",
    severity: "medium",
    translations: {
      en: {
        title: "Common Mistakes in Prayer at Maqam-e-Ibrahim",
        description: "Ensure proper prayer after Tawaf at Maqam-e-Ibrahim.",
        commonMistakes: [
          {
            mistake: "Praying too far from Maqam-e-Ibrahim",
            impact: "You miss the Sunnah location for prayer after Tawaf.",
            prevention: "Pray as close as possible to Maqam-e-Ibrahim, behind it if possible.",
          },
          {
            mistake: "Not making clear intention for the prayer",
            impact: "Your prayer may not be valid without proper intention.",
            prevention: "Make a clear intention (Niyyah) for the 2 Rakat prayer after Tawaf.",
          },
          {
            mistake: "Rushing through the prayer",
            impact: "You may miss the tranquility and focus required for valid prayer.",
            prevention: "Pray with full concentration and proper recitation.",
          },
        ],
        tips: [
          "Perform 2 Rakat behind Maqam-e-Ibrahim after Tawaf",
          "This prayer is Sunnah and part of the Tawaf ritual",
          "Pray with full concentration and mindfulness (Khushu)",
          "Recite Surah Al-Fatiha and another Surah in each Rakat",
          "Make dua after completing the prayer",
        ],
      },
      ar: {
        title: "الأخطاء الشائعة في الصلاة خلف مقام إبراهيم",
        description: "تأكد من صحة الصلاة بعد الطواف خلف مقام إبراهيم.",
        commonMistakes: [
          {
            mistake: "الصلاة بعيداً عن مقام إبراهيم",
            impact: "تفوت عليك سنة موقع الصلاة بعد الطواف.",
            prevention: "صلِ قريباً من مقام إبراهيم، خلفه إن أمكن.",
          },
        ],
        tips: [
          "صلِ ركعتين خلف مقام إبراهيم بعد الطواف",
          "هذه الصلاة سنة وجزء من الطواف",
          "صلِ بتركيز وخشوع كامل",
          "اقرأ الفاتحة وسورة أخرى في كل ركعة",
          "ادعُ بعد انتهاء الصلاة",
        ],
      },
      ur: {
        title: "مقام ابراہیم کے پیچھے نماز میں عام غلطیاں",
        description: "طواف کے بعد مقام ابراہیم کے پیچھے صحیح نماز یقینی بنائیں۔",
        commonMistakes: [
          {
            mistake: "مقام سے دور نماز پڑھنا",
            impact: "آپ طواف کے بعد نماز کی سنت جگہ سے محروم ہو جاتے ہیں۔",
            prevention: "مقام ابراہیم کے قریب، اگر ممکن ہو تو پیچھے نماز پڑھیں۔",
          },
        ],
        tips: [
          "طواف کے بعد مقام ابراہیم کے پیچھے 2 رکعت نماز پڑھیں",
          "یہ نماز سنت ہے اور طواف کا حصہ ہے",
          "مکمل توجہ اور خشوع کے ساتھ نماز پڑھیں",
          "ہر رکعت میں الفاتحہ اور کوئی دوسری سورہ پڑھیں",
          "نماز کے بعد دعا کریں",
        ],
      },
    },
  },
  {
    ritualKey: "sai",
    severity: "high",
    translations: {
      en: {
        title: "Common Mistakes in Sa'i",
        description: "Avoid these common mistakes during Sa'i (walking between Safa and Marwah).",
        commonMistakes: [
          {
            mistake: "Starting from Marwah instead of Safa",
            impact: "Your Sa'i may be invalid. You must start from Safa as per the Sunnah.",
            prevention: "Always start from Safa hill first and end at Marwah for the complete ritual.",
          },
          {
            mistake: "Losing count of the rounds",
            impact: "You may complete an incorrect number of rounds, invalidating your Sa'i.",
            prevention: "Count carefully. Use your fingers or a counter to track all 7 rounds.",
          },
          {
            mistake: "Not walking between the correct boundaries",
            impact: "Your Sa'i may be incomplete or invalid.",
            prevention: "Walk between the two hills fully. Complete each round from one end to the other.",
          },
          {
            mistake: "Breaking ritual purity during Sa'i",
            impact: "Your Sa'i becomes invalid and must be repeated with fresh Wudu.",
            prevention: "Maintain ablution throughout. If broken, perform Wudu and restart Sa'i.",
          },
        ],
        tips: [
          "Start from Safa and end at Marwah",
          "Complete 7 full rounds between the hills",
          "Increase your pace between the green pillars (the green colored section)",
          "Make dua and dhikr throughout Sa'i",
          "This commemorates the sacrifice and trust of Hazrat Hagar (A.S)",
        ],
      },
      ar: {
        title: "الأخطاء الشائعة في السعي",
        description: "تجنب هذه الأخطاء الشائعة أثناء السعي بين الصفا والمروة.",
        commonMistakes: [
          {
            mistake: "البدء من المروة بدلاً من الصفا",
            impact: "قد يكون السعي غير صحيح. يجب أن تبدأ من الصفا وفقاً للسنة.",
            prevention: "ابدأ دائماً من جبل الصفا أولاً وانتهِ عند المروة.",
          },
          {
            mistake: "فقدان العد",
            impact: "قد تكمل عدداً غير صحيح من الأشواط.",
            prevention: "عد بعناية. استخدم أصابعك أو عداداً لتتبع جميع الأشواط السبعة.",
          },
        ],
        tips: [
          "ابدأ من الصفا وانتهِ عند المروة",
          "أكمل 7 أشواط كاملة بين التلين",
          "زد السرعة بين الأعمدة الخضراء",
          "ادعُ وسبِّح طوال السعي",
          "هذا تذكر لتضحية وثقة هاجر عليها السلام",
        ],
      },
      ur: {
        title: "سعی میں عام غلطیاں",
        description: "صفا اور مروہ کے درمیان سعی کے دوران ان عام غلطیوں سے بچیں۔",
        commonMistakes: [
          {
            mistake: "صفا کی بجائے مروہ سے شروع کرنا",
            impact: "آپ کی سعی غلط ہو سکتی ہے۔ آپ کو صفا سے شروع کرنا ضروری ہے۔",
            prevention: "ہمیشہ صفا سے شروع کریں اور مروہ پر ختم کریں۔",
          },
          {
            mistake: "گنتی کھونا",
            impact: "آپ غلط تعداد میں چکر لگا سکتے ہیں۔",
            prevention: "احتیاط سے گنیں۔ تمام 7 چکروں کو ٹریک کریں۔",
          },
        ],
        tips: [
          "صفا سے شروع کریں اور مروہ پر ختم کریں",
          "پہاڑیوں کے درمیان 7 مکمل چکر لگائیں",
          "سبز ستونوں کے درمیان رفتار تیز کریں",
          "سعی کے دوران مسلسل دعا اور ذکر کریں",
          "یہ حضرت ہاجر کی قربانی اور توکل کی یادگاری ہے",
        ],
      },
    },
  },
  {
    ritualKey: "hair-cutting",
    severity: "medium",
    translations: {
      en: {
        title: "Common Mistakes in Halq/Taqsir (Hair Cutting)",
        description: "Ensure proper hair cutting to complete your Umrah.",
        commonMistakes: [
          {
            mistake: "Women shaving their head completely",
            impact: "This is not permitted for women. Women should only cut a portion of hair.",
            prevention: "Women should cut 1-2 inches from their hair, not shave the entire head.",
          },
          {
            mistake: "Men not cutting enough hair",
            impact: "You may not properly exit the state of Ihram.",
            prevention: "Men should either shave their head completely or trim at least 1/4 of hair.",
          },
          {
            mistake: "Using unsterilized tools",
            impact: "Risk of infection or injury to the scalp.",
            prevention: "Use clean, sterilized tools. Seek a professional barber if possible.",
          },
          {
            mistake: "Rushing the process",
            impact: "You may miss the spiritual significance of this final step.",
            prevention: "Take time and make dua during hair cutting. Reflect on completing your Umrah.",
          },
        ],
        tips: [
          "Men: Shave your head completely (Halq) or trim hair significantly (Taqsir)",
          "Women: Trim a few strands of hair (Taqsir only, minimum 1-2 inches)",
          "After this, your Umrah is complete and Ihram ends",
          "Use a professional barber if available for safety and hygiene",
          "This final step officially exits you from the state of Ihram",
        ],
      },
      ar: {
        title: "الأخطاء الشائعة في الحلق والتقصير",
        description: "تأكد من صحة قص الشعر لإكمال عمرتك.",
        commonMistakes: [
          {
            mistake: "حلق النساء رؤوسهن بالكامل",
            impact: "هذا غير مسموح للنساء. يجب على النساء قص جزء من الشعر فقط.",
            prevention: "يجب على النساء قص بوصة واحدة إلى بوصتين من شعرهن، وليس حلق الرأس.",
          },
          {
            mistake: "عدم قص الرجال شعراً كافياً",
            impact: "قد لا تخرج من حالة الإحرام بشكل صحيح.",
            prevention: "يجب على الرجال حلق رؤوسهم بالكامل أو قص جزء كبير من الشعر.",
          },
        ],
        tips: [
          "الرجال: احلقوا رؤوسكم بالكامل أو قصّروا الشعر بشكل كبير",
          "النساء: قصّن بضع خصلات من الشعر (التقصير فقط)",
          "بعد هذا تكتمل عمرتك وينتهي الإحرام",
          "اطلبوا من حلاق محترف إذا أمكن",
          "هذه الخطوة الأخيرة تخرجك رسمياً من حالة الإحرام",
        ],
      },
      ur: {
        title: "حلق اور تقصیر میں عام غلطیاں",
        description: "اپنے عمرے کو مکمل کرنے کے لیے صحیح بال کاٹنا یقینی بنائیں۔",
        commonMistakes: [
          {
            mistake: "خواتین کے سر کو مکمل طور پر منڈوانا",
            impact: "یہ خواتین کے لیے اجازت نہیں۔ خواتین کو صرف بالوں کا حصہ کاٹنا چاہیے۔",
            prevention: "خواتین کو اپنے بالوں سے 1-2 انچ کاٹنے چاہیے، سر منڈوانا نہیں۔",
          },
          {
            mistake: "مردوں کے بالوں کو کافی نہ کاٹنا",
            impact: "آپ احرام کی حالت سے صحیح طریقے سے نہیں نکل سکتے۔",
            prevention: "مردوں کو اپنا سر مکمل طور پر منڈوانا چاہیے یا کافی بال کاٹنے چاہیے۔",
          },
        ],
        tips: [
          "مردوں: اپنا سر مکمل طور پر منڈوائیں یا بالوں کو کاٹیں",
          "خواتین: شعر کے کچھ تارے کاٹیں (صرف تقصیر)",
          "اس کے بعد آپ کا عمرہ مکمل ہو جاتا ہے",
          "اگر ممکن ہو تو پیشہ ور ناپ سے مدد لیں",
          "یہ آخری مرحلہ آپ کو احرام سے باہر نکال دیتا ہے",
        ],
      },
    },
  },
  {
    ritualKey: "masjid-visits",
    severity: "low",
    translations: {
      en: {
        title: "Etiquette and Common Mistakes in Masjid Visits",
        description: "Ensure respectful behavior during additional prayers in Masjid al-Haram.",
        commonMistakes: [
          {
            mistake: "Being disrespectful to the sacred space",
            impact: "You violate the sanctity of the Haram and disrespect other worshippers.",
            prevention: "Maintain utmost respect, speak softly, and avoid unnecessary movement.",
          },
          {
            mistake: "Taking photos inappropriately in restricted areas",
            impact: "You may disturb other worshippers and violate Haram protocols.",
            prevention: "Follow all signage and rules about photography. Never photograph during prayer.",
          },
          {
            mistake: "Disturbing others in prayer",
            impact: "You interrupt sacred moments of worship for other pilgrims.",
            prevention: "Be mindful of others. Speak softly, walk carefully, and avoid crowded prayer areas.",
          },
        ],
        tips: [
          "Visit during quieter times if possible (early morning or late evening)",
          "Perform additional salah and remember Allah with sincere intentions",
          "Be extremely respectful of other worshippers in the sacred sanctuary",
          "Take time for personal dua and quiet reflection",
          "Spend time in the Haram as an act of worship and spiritual connection",
        ],
      },
      ar: {
        title: "الآداب والأخطاء الشائعة في زيارة المسجد",
        description: "تأكد من السلوك الاحترامي أثناء الصلاة الإضافية في المسجد الحرام.",
        commonMistakes: [
          {
            mistake: "عدم احترام المكان المقدس",
            impact: "تنتهك قدسية الحرم وتسيء إلى العابدين الآخرين.",
            prevention: "احترم المكان، تحدث برفق، وتجنب الحركة غير الضرورية.",
          },
        ],
        tips: [
          "زر عندما تكون أوقات أهدأ إن أمكن",
          "قم بصلوات إضافية وذكر الله بإخلاص",
          "احترم العابدين الآخرين في المسجد المقدس",
          "خذ وقتاً للدعاء الشخصي والتأمل",
          "اقضِ الوقت في الحرم كعبادة واتصال روحي",
        ],
      },
      ur: {
        title: "مسجد الحرام کے دورے میں ادب اور عام غلطیاں",
        description: "مسجد الحرام میں اضافی نماز کے دوران احترام آمیز رویہ یقینی بنائیں۔",
        commonMistakes: [
          {
            mistake: "مقدس جگہ کی بے احترامی",
            impact: "آپ حرم کی پاکیزگی کو نقصان دیتے ہیں۔",
            prevention: "احترام کریں، آہستہ بولیں، اور غیر ضروری حرکت سے پرہیز کریں۔",
          },
        ],
        tips: [
          "اگر ممکن ہو تو پرسرار اوقات میں دورہ کریں",
          "اضافی نماز ادا کریں اور اللہ کو یاد کریں",
          "دوسری نمازیوں سے احترام کریں",
          "ذاتی دعا اور غور و فکر کے لیے وقت نکالیں",
          "حرم میں وقت گزاریں کوئی عبادت اور روحانی رابطہ",
        ],
      },
    },
  },
  {
    ritualKey: "zamzam",
    severity: "low",
    translations: {
      en: {
        title: "Proper Etiquette for Drinking Zamzam Water",
        description: "Drink Zamzam water with proper intention and etiquette.",
        commonMistakes: [
          {
            mistake: "Wasting Zamzam water",
            impact: "You disrespect this blessed water and waste a precious gift.",
            prevention: "Drink only what you need. Do not waste water by pouring it carelessly.",
          },
          {
            mistake: "Not making intention",
            impact: "You miss the spiritual benefit and blessing of Zamzam.",
            prevention: "Make clear intention for health, healing, and spiritual benefit before drinking.",
          },
          {
            mistake: "Drinking with left hand",
            impact: "You miss the Sunnah of drinking with the right hand.",
            prevention: "Always drink with your right hand as a practice of the Sunnah.",
          },
        ],
        tips: [
          "Drink with your right hand",
          "Make sincere intention for health and spiritual benefit",
          "Drink slowly and mindfully, not hastily",
          "Share Zamzam water with family and loved ones",
          "Thank Allah for this blessed water and the completion of your Umrah",
        ],
      },
      ar: {
        title: "الآداب الصحيحة لشرب ماء زمزم",
        description: "اشرب ماء زمزم بنية صحيحة وآداب مناسبة.",
        commonMistakes: [
          {
            mistake: "هدر ماء زمزم",
            impact: "تسيء إلى هذا الماء المبارك وتهدر هدية ثمينة.",
            prevention: "اشرب فقط ما تحتاج. لا تهدر الماء بسكبه بإهمال.",
          },
        ],
        tips: [
          "اشرب بيدك اليمنى",
          "انوِ الشفاء والفائدة الروحية",
          "اشرب ببطء وتأمل، وليس على عجل",
          "شارك ماء زمزم مع العائلة والأحبة",
          "اشكر الله على هذا الماء المبارك",
        ],
      },
      ur: {
        title: "زمزم کا پانی پینے کا صحیح ادب",
        description: "صحیح نیت اور ادب کے ساتھ زمزم کا پانی پیں۔",
        commonMistakes: [
          {
            mistake: "زمزم کے پانی کو ضائع کرنا",
            impact: "آپ اس مبارک پانی کی بے احترامی کرتے ہیں۔",
            prevention: "صرف ضرورت کا پانی پیں۔ پانی ضائع نہ کریں۔",
          },
        ],
        tips: [
          "اپنے دائیں ہاتھ سے پیں",
          "شفاء اور روحانی فائدے کی نیت کریں",
          "آہستہ اور توجہ سے پیں",
          "خاندار کے ساتھ زمزم شیئر کریں",
          "اللہ کا شکریہ ادا کریں",
        ],
      },
    },
  },
  {
    ritualKey: "final-dua",
    severity: "medium",
    translations: {
      en: {
        title: "Important Considerations for Final Dua",
        description: "Make meaningful final supplications to complete your Umrah.",
        commonMistakes: [
          {
            mistake: "Rushing through the final dua",
            impact: "You miss the spiritual significance and blessing of this final moment.",
            prevention: "Take your time. Make sincere and heartfelt supplications.",
          },
          {
            mistake: "Not facing the Kaaba",
            impact: "You miss the importance of facing Allah's House for dua.",
            prevention: "Always face the Kaaba when making final dua.",
          },
          {
            mistake: "Forgetting to thank Allah",
            impact: "You miss expressing gratitude for the opportunity to perform Umrah.",
            prevention: "Always include thanks to Allah for enabling you to complete Umrah.",
          },
        ],
        tips: [
          "Face the Kaaba for your final dua",
          "Ask Allah for forgiveness and His blessings",
          "Thank Allah sincerely for completing your Umrah",
          "Make personal duas for yourself and your loved ones",
          "Take time for quiet reflection on your spiritual journey",
        ],
      },
      ar: {
        title: "اعتبارات مهمة للدعاء النهائي",
        description: "قدِّم الدعاء النهائي المعنوي لإكمال عمرتك.",
        commonMistakes: [
          {
            mistake: "الاستعجال في الدعاء النهائي",
            impact: "تفوت عليك الأهمية الروحية والبركة من هذه اللحظة الأخيرة.",
            prevention: "خذ وقتك. قدِّم الدعاء بإخلاص وصدق.",
          },
          {
            mistake: "عدم استقبال الكعبة",
            impact: "تفوت عليك أهمية استقبال بيت الله عند الدعاء.",
            prevention: "استقبل الكعبة دائماً عند الدعاء النهائي.",
          },
        ],
        tips: [
          "استقبل الكعبة للدعاء النهائي",
          "اطلب المغفرة والبركة من الله",
          "اشكر الله بصدق على إكمال عمرتك",
          "قدِّم أدعية شخصية لنفسك والأحبة",
          "خذ وقتاً للتأمل الهادئ",
        ],
      },
      ur: {
        title: "آخری دعا کے لیے اہم نکات",
        description: "اپنے عمرے کو مکمل کرنے کے لیے معنی خیز آخری دعا کریں۔",
        commonMistakes: [
          {
            mistake: "آخری دعا میں جلدی کرنا",
            impact: "آپ اس آخری لمحے کی روحانی اہمیت سے محروم ہو جاتے ہیں۔",
            prevention: "اپنا وقت لیں۔ خالصانہ اور سچی دعا کریں۔",
          },
          {
            mistake: "خانہ کعبہ کا رخ نہ کرنا",
            impact: "آپ دعا کے لیے اللہ کے گھر کا رخ کرنے کی اہمیت سے محروم رہتے ہیں۔",
            prevention: "آخری دعا کے لیے ہمیشہ خانہ کعبہ کا رخ کریں۔",
          },
        ],
        tips: [
          "آخری دعا کے لیے خانہ کعبہ کا رخ کریں",
          "اللہ سے معافی اور برکت مانگیں",
          "عمرے کی تکمیل پر اللہ کا شکریہ ادا کریں",
          "اپنے اور پیاروں کے لیے ذاتی دعائیں کریں",
          "خاموش غور و فکر کے لیے وقت لیں",
        ],
      },
    },
  },
];

async function seedDatabase() {
  try {
    const mongoUri = process.env.DATABASE_URL || "";
    await mongoose.connect(mongoUri);

    // Seed rituals
    await Ritual.deleteMany({});
    const insertedRituals = await Ritual.insertMany(ritualData);
    console.log("✓ Rituals seeded successfully");

    // Create map of ritual keys to IDs for mistake guides
    const ritualKeyToId: { [key: string]: any } = {};
    insertedRituals.forEach((ritual: any) => {
      ritualKeyToId[ritual.key] = ritual._id;
    });

    // Update mistake guides with ritualIds
    const mistakeGuideDataWithIds = mistakeGuideData.map((guide: any) => ({
      ...guide,
      ritualId: ritualKeyToId[guide.ritualKey],
    }));

    // Seed elderly guides
    await ElderlyGuide.deleteMany({});
    await ElderlyGuide.insertMany(elderlyGuideData);
    console.log("✓ Elderly guides seeded successfully");

    // Seed mistake guides using raw MongoDB driver to ensure persistence
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("MongoDB connection not available");
    }

    const mistakeGuidesCollection = db.collection("mistakeguides");
    await mistakeGuidesCollection.deleteMany({});
    console.log("Cleared existing mistake guides");
    console.log(`Attempting to seed ${mistakeGuideDataWithIds.length} mistake guides...`);

    try {
      const result = await mistakeGuidesCollection.insertMany(mistakeGuideDataWithIds, { ordered: false });
      console.log(
        `✓ Mistake guides seeded successfully (${result.insertedCount} guides inserted)`
      );
    } catch (error: any) {
      // Log any write errors but still report success if some docs were inserted
      const insertedCount = error.insertedCount || 0;
      console.log(
        `✓ Mistake guides seeded (${insertedCount} inserted, ${error.writeErrors?.length || 0} errors)`
      );
      if (error.writeErrors) {
        error.writeErrors.forEach((err: any) => {
          console.error(`  - Error: ${err.errmsg.substring(0, 80)}`);
        });
      }
    }

    // Verify seeding by querying
    const ritualCount = await Ritual.countDocuments();
    const elderlyCount = await ElderlyGuide.countDocuments();

    // Force a fresh query of mistake guides
    const guidesDocs = await MistakeGuide.find({}).lean();
    const guideCount = guidesDocs.length;

    console.log(
      `\n📊 Verification: ${ritualCount} rituals, ${elderlyCount} elderly guides, ${guideCount} mistake guides`
    );

    if (guideCount !== 9) {
      console.log(`⚠️  Warning: Expected 9 guides, but found ${guideCount}`);
      console.log(`  Guides found: ${guidesDocs.map((g: any) => g.ritualKey).join(', ')}`);
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("✗ Seed failed:", error);
    process.exit(1);
  }
}

seedDatabase();
