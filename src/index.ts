import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import ritualRoutes from "./routes/ritual.routes";
import progressRoutes from "./routes/progress.routes";
import mediaRoutes from "./routes/media.routes";
import mistakeGuideRoutes from "./routes/mistakeGuide.routes";
import elderlyGuideRoutes from "./routes/elderlyGuide.routes";
import offlineAssistantRoutes from "./routes/offlineAssistant.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/rituals", ritualRoutes);
app.use("/progress", progressRoutes);
app.use("/media", mediaRoutes);
app.use("/mistake-guides", mistakeGuideRoutes);
app.use("/elderly-guides", elderlyGuideRoutes);
app.use("/offline", offlineAssistantRoutes);

// Local dev only — Vercel uses the exported app
if (process.env.NODE_ENV !== "production") {
  const PORT = parseInt(process.env.PORT || "8000", 10);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

export default app;
