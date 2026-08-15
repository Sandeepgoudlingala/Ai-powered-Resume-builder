import { ai, MODEL_NAME } from '../config/gemini.config.js';

/**
 * Extracts plain text from a PDF buffer using Gemini's native PDF understanding.
 *
 * This completely avoids pdfjs-dist (and any library that wraps it like pdf-parse),
 * which crash in Vercel serverless because they cannot load a Web Worker.
 *
 * Gemini 2.5 Flash natively understands PDFs via inline base64 data — no parsing
 * library required at all.
 */
const extractTextFromPdf = async (buffer) => {
  const base64Data = buffer.toString('base64');

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: [
      {
        role: 'user',
        parts: [
          {
            inlineData: {
              mimeType: 'application/pdf',
              data: base64Data,
            },
          },
          {
            text: 'Extract ALL text content from this PDF resume. Return ONLY the raw extracted text, preserving the original structure and order of sections (contact info, summary, experience, education, skills, projects, certifications). Do not add any commentary or formatting — just the text.',
          },
        ],
      },
    ],
  });

  return response.text;
};

export default extractTextFromPdf;