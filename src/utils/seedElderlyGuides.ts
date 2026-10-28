import "dotenv/config";
import mongoose from "mongoose";
import ElderlyGuide from "../models/ElderlyGuide";

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

async function seedElderlyGuides() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/smart-umrah");
    console.log("Connected to MongoDB");

    // Clear existing data
    await ElderlyGuide.deleteMany({});
    console.log("Cleared existing elderly guides");

    // Insert new data
    const result = await ElderlyGuide.insertMany(elderlyGuideData);
    console.log(`✅ Seeded ${result.length} elderly guides`);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedElderlyGuides();
