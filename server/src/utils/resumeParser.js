import { createRequire } from 'module';

// pdf-parse is a CommonJS-only package.
// Using createRequire is the most reliable way to import CJS packages
// from ESM in Node.js serverless environments (Vercel ncc bundler safe).
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

/**
 * Extracts plain text from a PDF buffer.
 * Uses pdf-parse (server-native) instead of pdfjs-dist (browser-first)
 * to avoid the "Cannot find module pdf.worker.mjs" error in Vercel serverless.
 */
const extractTextFromPdf = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text.trim();
};

export default extractTextFromPdf;