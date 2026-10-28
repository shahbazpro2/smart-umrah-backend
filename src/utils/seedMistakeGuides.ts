import "dotenv/config";
import mongoose from "mongoose";
import MistakeGuide from "../models/MistakeGuide";
import Ritual from "../models/Ritual";

async function seedMistakeGuides() {
  try {
    const mongoUri = process.env.DATABASE_URL || process.env.MONGO_URI || "mongodb://localhost:27017/smart-umrah";
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");

    // Fetch all rituals to get their IDs
    const rituals = await Ritual.find().lean();
    console.log(`Found ${rituals.length} rituals`);

    if (rituals.length === 0) {
      console.error("No rituals found. Please run the main seed script first.");
      process.exit(1);
    }

    // Create a map of ritual keys to IDs
    const ritualKeyToId: { [key: string]: mongoose.Types.ObjectId } = {};
    rituals.forEach((ritual: any) => {
      ritualKeyToId[ritual.key] = ritual._id;
    });

    const mistakeGuideData = [
      {
        ritualKey: "safar-ihram",
        ritualId: ritualKeyToId["safar-ihram"],
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
        ritualId: ritualKeyToId["masjid-entry"],
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
        ritualId: ritualKeyToId["tawaf"],
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
        ritualId: ritualKeyToId["prayer-maqam"],
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
        ritualId: ritualKeyToId["sai"],
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
        ritualId: ritualKeyToId["hair-cutting"],
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
        ritualId: ritualKeyToId["masjid-visits"],
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
        ritualId: ritualKeyToId["zamzam"],
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
        ritualId: ritualKeyToId["final-dua"],
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

    // Clear existing data
    await MistakeGuide.deleteMany({});
    console.log("Cleared existing mistake guides");

    // Insert new data with error handling for each guide
    let successCount = 0;
    let failureCount = 0;

    for (const guideData of mistakeGuideData) {
      try {
        const guide = new MistakeGuide(guideData);
        await guide.save();
        successCount++;
        console.log(`✓ Seeded: ${guideData.ritualKey}`);
      } catch (error: any) {
        failureCount++;
        console.error(`✗ Failed to seed ${guideData.ritualKey}:`, error.message);
      }
    }

    console.log(`\n✅ Successfully seeded ${successCount} mistake guides`);
    if (failureCount > 0) {
      console.log(`⚠️  Failed to seed ${failureCount} guides`);
    }

    // Verify seeding
    const count = await MistakeGuide.countDocuments();
    console.log(`\nVerification: ${count} guides in database`);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedMistakeGuides();
