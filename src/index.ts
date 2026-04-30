import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import ritualRoutes from './routes/ritual.routes';
import progressRoutes from './routes/progress.routes';
import mediaRoutes from './routes/media.routes';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/rituals', ritualRoutes);
app.use('/progress', progressRoutes);
app.use('/media', mediaRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Available at: http://192.168.0.101:${PORT}`);
});
