# AI-Powered Resume Builder

> Build stunning, ATS-optimized resumes with the power of AI in minutes.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-brightgreen?style=for-the-badge&logo=vercel)](https://ai-resume-builder-sandeep.vercel.app)
[![API](https://img.shields.io/badge/Backend%20API-Visit%20API-blue?style=for-the-badge&logo=vercel)](https://ai-powered-resume-api.vercel.app)

---

## Deployment

| Service | URL |
|---------|-----|
| **Frontend (Live App)** | https://ai-resume-builder-sandeep.vercel.app |
| **Backend API** | https://ai-powered-resume-api.vercel.app |

---

## Features

- Google OAuth and Email/Password authentication
- Gemini AI powered resume content generation
- Multiple resume templates to choose from
- Resume versioning — save and restore previous versions
- PDF export of your finished resume
- Dark-themed, modern UI

---

## Tech Stack

### Frontend
- React + Vite
- React Router for navigation
- @react-oauth/google for Google Sign-In
- react-hot-toast for notifications
- react-pdf for PDF rendering/export

### Backend
- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JWT authentication
- Google Auth Library for token verification
- Gemini AI API for resume content generation
- Deployed as Vercel Serverless Functions

---

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Google OAuth Client ID
- Gemini API Key

### 1. Clone the repository

git clone https://github.com/Sandeepgoudlingala/Ai-powered-Resume-builder.git
cd Ai-powered-Resume-builder

### 2. Setup the Backend

cd server
npm install

Create a .env file in the server directory:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_CLIENT_ID=your_google_client_id
NODE_ENV=development

Start the server:
node server.js

### 3. Setup the Frontend

cd client
npm install

Create a .env file in the client directory:

VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id

Start the frontend:
npm run dev

---

## Project Structure

Ai-powered-Resume-builder/
+-- client/                  # React frontend
|   +-- src/
|   |   +-- components/      # Reusable UI components
|   |   +-- context/         # Auth context
|   |   +-- pages/           # Page components
|   |   +-- services/        # API service layer
|   |   +-- main.jsx
|   +-- vercel.json
|   +-- package.json
|
+-- server/                  # Express backend
    +-- api/
    |   +-- index.js         # Vercel serverless entry
    +-- src/
    |   +-- config/          # DB and Google config
    |   +-- controllers/     # Route controllers
    |   +-- middlewares/     # Auth middleware
    |   +-- models/          # Mongoose models
    |   +-- routes/          # API routes
    |   +-- services/        # Business logic
    |   +-- app.js           # Express app
    +-- vercel.json
    +-- package.json

---

## Environment Variables

### Server
| Variable | Description |
|----------|-------------|
| MONGODB_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for JWT signing |
| JWT_EXPIRES_IN | JWT expiry e.g. 7d |
| CLIENT_URL | Frontend URL for CORS |
| GEMINI_API_KEY | Google Gemini AI API key |
| GOOGLE_CLIENT_ID | Google OAuth Client ID |
| NODE_ENV | development or production |

### Client
| Variable | Description |
|----------|-------------|
| VITE_API_URL | Backend API base URL |
| VITE_GOOGLE_CLIENT_ID | Google OAuth Client ID |

---

## License

MIT (c) Sandeep Goud Lingala
