# Smart Umrah Backend

Node.js/Express backend for the Smart Umrah mobile application with MongoDB integration.

## Features

### 1. **User Registration & Profile**
- Email/password authentication with bcryptjs hashing
- JWT token generation and verification
- User profile management
- Avatar upload support
- Language preference storage
- Experience level tracking

### 2. **Ritual Workflow**
- Complete 8-step Umrah ritual workflow
- Multilingual ritual data (English, Arabic, Urdu)
- Tips and common mistakes for each ritual
- User progress tracking
- Completion status management

### 3. **Multimedia Guidance**
- Video, audio, and image file storage
- Multer middleware for secure file uploads
- Media filtering by type and language
- File serving with proper MIME types

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your values:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/smart-umrah
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

4. Start MongoDB (if running locally):
```bash
# macOS with Homebrew
brew services start mongodb-community

# Or use MongoDB Atlas (cloud)
# Just update DATABASE_URL in .env
```

5. Seed initial ritual data:
```bash
ts-node src/utils/seed.ts
```

6. Start development server:
```bash
npm run dev
```

Server will run on http://localhost:3000

## Scripts

- `npm run dev` - Start development server with hot reload (uses nodemon)
- `npm run build` - Compile TypeScript to JavaScript in dist/
- `npm start` - Run production server from compiled code

## Project Structure

```
src/
├── index.ts                    # Main entry point & server setup
├── config/
│   └── db.ts                  # MongoDB connection
├── models/
│   ├── User.ts                # User schema with password hashing
│   ├── Ritual.ts              # Umrah ritual schema
│   ├── UserProgress.ts        # User ritual progress tracking
│   └── Media.ts               # Media files schema
├── routes/
│   ├── auth.routes.ts         # Authentication endpoints
│   ├── user.routes.ts         # User profile endpoints
│   ├── ritual.routes.ts       # Ritual endpoints
│   ├── progress.routes.ts     # Progress tracking endpoints
│   └── media.routes.ts        # Media file endpoints
├── controllers/
│   ├── auth.controller.ts     # Auth logic
│   ├── user.controller.ts     # User profile logic
│   ├── ritual.controller.ts   # Ritual logic
│   ├── progress.controller.ts # Progress logic
│   └── media.controller.ts    # Media logic
├── middleware/
│   ├── auth.middleware.ts     # JWT verification
│   └── upload.middleware.ts   # Multer configuration
├── validators/
│   ├── auth.validator.ts      # Zod schemas for auth
│   └── profile.validator.ts   # Zod schemas for profile
├── utils/
│   └── seed.ts                # Database seeding script
└── uploads/                   # Static file storage (served at /uploads)
```

## API Endpoints

### Authentication
```
POST   /auth/register          # Register new user
POST   /auth/login             # Login and get JWT token
GET    /auth/me                # Get current user (requires auth)
```

### User Profile
```
GET    /users/profile          # Get user profile
PUT    /users/profile          # Update user profile
POST   /users/avatar           # Upload user avatar
```

### Rituals
```
GET    /rituals                # Get all 8 Umrah rituals
GET    /rituals/:id            # Get specific ritual details
```

### Progress
```
GET    /progress               # Get user's ritual progress
POST   /progress               # Mark ritual as complete
```

### Media
```
GET    /media                  # Get all media files (with filtering)
  - Query params: ?type=video&language=en
GET    /media/:id              # Get specific media file
POST   /media                  # Upload media file (multipart)
```

## Database Schemas

### User
```javascript
{
  name: String (required),
  email: String (unique, required),
  password: String (hashed, required),
  age: Number,
  gender: String ('male' | 'female'),
  preferredLanguage: String ('en' | 'ar' | 'ur', default: 'en'),
  experienceLevel: String ('first_time' | 'experienced', default: 'first_time'),
  isElderly: Boolean (default: false),
  avatarPath: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Ritual
```javascript
{
  sequence: Number (1-8, unique),
  key: String (unique),
  isRequired: Boolean,
  estimatedDuration: String,
  translations: {
    en: { title, description, tips[], commonMistakes[] },
    ar: { title, description, tips[], commonMistakes[] },
    ur: { title, description, tips[], commonMistakes[] }
  },
  createdAt: Date,
  updatedAt: Date
}
```

### UserProgress
```javascript
{
  userId: ObjectId (ref: User),
  ritualId: ObjectId (ref: Ritual),
  isCompleted: Boolean,
  completedAt: Date,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Media
```javascript
{
  title: String,
  type: String ('video' | 'audio' | 'image'),
  ritualId: ObjectId (ref: Ritual, optional),
  language: String ('en' | 'ar' | 'ur' | 'all'),
  filePath: String,
  fileName: String,
  mimeType: String,
  fileSize: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. User registers/logs in
2. Server returns JWT token
3. Client stores token in AsyncStorage
4. Client includes token in `Authorization: Bearer <token>` header
5. Server verifies token before processing protected routes

Token expires in 30 days.

## File Uploads

Files are uploaded using Multer and stored in the `/uploads` directory:

- **Avatar**: Max 5MB, images only
- **Media**: Max 500MB, videos, audio, images

Files are served at `/uploads/<filename>`

## Validation

Input validation uses Zod schemas:
- Register: name, email, password validation
- Login: email, password validation
- Profile updates: all fields optional but validated types

## Error Handling

All errors return JSON with appropriate HTTP status codes:
- 400 - Bad Request
- 401 - Unauthorized
- 404 - Not Found
- 500 - Server Error

Example error response:
```json
{
  "error": "Invalid email format"
}
```

## Testing

Test the API with curl or Postman:

```bash
# Register
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Pilgrim",
    "email": "john@example.com",
    "password": "password123",
    "preferredLanguage": "en",
    "experienceLevel": "first_time"
  }'

# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Get current user (with token)
curl -X GET http://localhost:3000/auth/me \
  -H "Authorization: Bearer <your-jwt-token>"

# Get all rituals
curl -X GET http://localhost:3000/rituals \
  -H "Authorization: Bearer <your-jwt-token>"
```

## Environment Variables

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=mongodb://localhost:27017/smart-umrah
# Or use MongoDB Atlas:
# DATABASE_URL=mongodb+srv://user:password@cluster.mongodb.net/smart-umrah

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

## Security

- Passwords are hashed with bcryptjs (10 salt rounds)
- JWT tokens expire in 30 days
- CORS enabled for Expo frontend
- File uploads validated by type and size
- Database queries use parameterized queries (Mongoose handles this)

For production:
- Use strong JWT_SECRET
- Enable HTTPS
- Set NODE_ENV=production
- Use environment-specific database URLs
- Implement rate limiting
- Add request logging

## Troubleshooting

**MongoDB connection failed:**
- Ensure MongoDB is running
- Check DATABASE_URL is correct
- Verify network access if using Atlas

**Port already in use:**
```bash
# Change PORT in .env or kill process
lsof -ti:3000 | xargs kill -9
```

**JWT errors:**
- Check JWT_SECRET is set in .env
- Verify token format: `Bearer <token>`
- Check token hasn't expired

**File upload fails:**
- Ensure `/uploads` directory is writable
- Check file size limits
- Verify MIME type is allowed
