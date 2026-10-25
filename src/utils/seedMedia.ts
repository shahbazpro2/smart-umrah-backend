import "dotenv/config";
import mongoose from "mongoose";
import Media from "../models/Media";

const mediaData = [
  {
    title: "Umrah Guide",
    type: "youtube" as const,
    language: "all" as const,
    youtubeUrl: "https://www.youtube.com/watch?v=Zv95wX3Qc6w",
    youtubeId: "Zv95wX3Qc6w",
    filePath: "",
    fileName: "",
    mimeType: "",
    fileSize: 0,
  },
  {
    title: "Hajj & Umrah Talbiyah (With Translation)",
    type: "audio" as const,
    language: "all" as const,
    filePath: "/uploads/audios/Hajj Talbiyah - Labbaik Allahumma Labbaik with Translation.mp3",
    fileName: "Hajj Talbiyah - Labbaik Allahumma Labbaik with Translation.mp3",
    mimeType: "audio/mpeg",
    fileSize: 1948750,
  },
  {
    title: "How to Perform Umrah - Step By Step Guide",
    type: "video" as const,
    language: "en" as const,
    filePath: "/uploads/videos/How to Perform Umrah - Step By Step Guide.mp4",
    fileName: "How to Perform Umrah - Step By Step Guide.mp4",
    mimeType: "video/mp4",
    fileSize: 13698915,
  },
  {
    title: "How to Wear Ihram while performing Umrah or Hajj",
    type: "video" as const,
    language: "en" as const,
    filePath: "/uploads/videos/How to wear Ihram while perform Umrah or Hajj.mp4",
    fileName: "How to wear Ihram while perform Umrah or Hajj.mp4",
    mimeType: "video/mp4",
    fileSize: 8670163,
  },
  {
    title: "Prayer at Maqam-e-Ibrahim Guide",
    type: "video" as const,
    language: "en" as const,
    filePath: "/uploads/videos/Prayer at Maqam-e-Ibrahim guide.mp4",
    fileName: "Prayer at Maqam-e-Ibrahim guide.mp4",
    mimeType: "video/mp4",
    fileSize: 8692620,
  },
  {
    title: "Ihram Wearing Visual Steps",
    type: "image" as const,
    language: "en" as const,
    filePath: "/uploads/images_/Ihram_wearing_steps.png",
    fileName: "Ihram_wearing_steps.png",
    mimeType: "image/png",
    fileSize: 1264675,
  },
  {
    title: "Niyyah for Umrah",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Niyyah.png",
    fileName: "Niyyah.png",
    mimeType: "image/png",
    fileSize: 6070,
  },
  {
    title: "Talbiyyah Supplication Card",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Talbiyyah.png",
    fileName: "Talbiyyah.png",
    mimeType: "image/png",
    fileSize: 6881,
  },
  {
    title: "Drinking Zamzam Dua",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Drinking Zamzam dua.png",
    fileName: "Drinking Zamzam dua.png",
    mimeType: "image/png",
    fileSize: 6751,
  },
  {
    title: "Entering Makkah Dua",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Entering Makkah dua.png",
    fileName: "Entering Makkah dua.png",
    mimeType: "image/png",
    fileSize: 9101,
  },
  {
    title: "Entering Masjid al-Haram Dua",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Entering Masjid al-Haram.png",
    fileName: "Entering Masjid al-Haram.png",
    mimeType: "image/png",
    fileSize: 17109,
  },
  {
    title: "First-Sight of Holy Kaaba",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/First-sight kaaba.png",
    fileName: "First-sight kaaba.png",
    mimeType: "image/png",
    fileSize: 18274,
  },
  {
    title: "Rukn al-Yamani Dua",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Rukn al-Yamani.png",
    fileName: "Rukn al-Yamani.png",
    mimeType: "image/png",
    fileSize: 5457,
  },
  {
    title: "Safa-Marwa Dua Card",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Safa-Marwa dua.png",
    fileName: "Safa-Marwa dua.png",
    mimeType: "image/png",
    fileSize: 7688,
  },
  {
    title: "Supplication at Mount Safa",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Make Dua at Safa.png",
    fileName: "Make Dua at Safa.png",
    mimeType: "image/png",
    fileSize: 1544178,
  },
  {
    title: "Tawaf al-Umrah Circuit Guide",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Tawaf al-Umrah.png",
    fileName: "Tawaf al-Umrah.png",
    mimeType: "image/png",
    fileSize: 119764,
  },
  {
    title: "Leaving the Haram Dua",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/Leaving the Haram_dua.png",
    fileName: "Leaving the Haram_dua.png",
    mimeType: "image/png",
    fileSize: 8007,
  },
  {
    title: "Baitullah Kaaba High-Resolution Overview",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/khana kaaba.jpg",
    fileName: "khana kaaba.jpg",
    mimeType: "image/jpeg",
    fileSize: 4602390,
  },
  {
    title: "Kaaba & Mataf Pilgrims",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/khana kaaba.2.jpg",
    fileName: "khana kaaba.2.jpg",
    mimeType: "image/jpeg",
    fileSize: 1678501,
  },
  {
    title: "Maqam-e-Ibrahim Station",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/maqam-e-ibrahim.jpg",
    fileName: "maqam-e-ibrahim.jpg",
    mimeType: "image/jpeg",
    fileSize: 11787,
  },
  {
    title: "The Sacred Umrah Journey",
    type: "image" as const,
    language: "all" as const,
    filePath: "/uploads/images_/umrah.jpg",
    fileName: "umrah.jpg",
    mimeType: "image/jpeg",
    fileSize: 880358,
  },
];

async function seedMedia() {
  try {
    const mongoUri = process.env.DATABASE_URL || "";
    await mongoose.connect(mongoUri);

    for (const item of mediaData) {
      const query = item.type === "youtube" ? { youtubeId: item.youtubeId } : { title: item.title };
      await Media.updateOne(
        query,
        { $set: item },
        { upsert: true }
      );
    }

    console.log("✓ All 21 media items seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("✗ Media seed failed:", error);
    process.exit(1);
  }
}

seedMedia();
