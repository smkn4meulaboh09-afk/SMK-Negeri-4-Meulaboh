import { GoogleGenAI } from "@google/genai";
import { MAJORS, SCHOOL_NAME } from "../constants";

// Initialize API
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey: apiKey });

const SYSTEM_INSTRUCTION = `
You are a helpful and polite AI Assistant for ${SCHOOL_NAME} located in Meulaboh, Aceh.
Your goal is to assist prospective students, parents, and visitors.

Key Information you know:
- Majors (Jurusan): ${MAJORS.map(m => m.title).join(', ')}.
- Address: Jl. Sisingamangaraja, Meulaboh.
- You can answer questions about PPDB (Penerimaan Peserta Didik Baru).
- You speak Indonesian (Bahasa Indonesia).

Rules:
1. Always be polite and formal but approachable.
2. If asked about registration dates, say "Pendaftaran dibuka mulai bulan Mei hingga Juli setiap tahunnya." (Generic placeholder).
3. If you don't know an answer, suggest they contact the school office directly.
4. Keep answers concise (under 3 sentences if possible) unless asked for details.
`;

export const sendMessageToGemini = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    if (!apiKey) {
      return "Maaf, API Key belum dikonfigurasi. Mohon hubungi administrator.";
    }

    const model = 'gemini-2.5-flash';
    
    // Construct chat with history
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history, 
    });

    const response = await chat.sendMessage({
      message: userMessage
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan pada sistem AI kami. Silakan coba lagi nanti.";
  }
};
