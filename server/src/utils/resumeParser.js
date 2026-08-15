import pdfParse from 'pdf-parse/lib/pdf-parse.js';

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