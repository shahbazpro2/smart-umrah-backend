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
];

async function seedMedia() {
  try {
    const mongoUri = process.env.DATABASE_URL || "";
    await mongoose.connect(mongoUri);

    for (const item of mediaData) {
      await Media.updateOne(
        { youtubeId: item.youtubeId },
        { $set: item },
        { upsert: true }
      );
    }

    console.log("✓ Media seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("✗ Media seed failed:", error);
    process.exit(1);
  }
}

seedMedia();
