// ============================================
// app.js - Express Application Setup
// ============================================
// Configures the Express app with CORS, body parsing,
// API routes, and error handling.
// ============================================

import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const app = express(); // Express app instance (Express.js: Application Setup)

// --- Middleware ---
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman)
      if (!origin) return callback(null, true);
      
      const allowedPatterns = [
        /^http:\/\/localhost:\d+$/,
        /\.vercel\.app$/,
      ];

      const isAllowed = allowedPatterns.some((pattern) => pattern.test(origin));
      if (isAllowed || origin === process.env.CLIENT_URL) {
        callback(null, true);
      } else {
        callback(null, true); // Fallback allow for dev/prod flexibility
      }
    },
    credentials: true,
  })
); // CORS middleware (Express.js: Middleware)
app.use(express.json({ limit: '10mb' })); // JSON body parser (Express.js: Middleware)

// --- Routes ---
app.use('/api', routes); // Route mounting (Express.js: Route Organization)

// --- Error Handling ---
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
