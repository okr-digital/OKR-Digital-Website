import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeBusinessPotential = async (website: string, goal: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock response.");
    return "Dein Potenzial ist riesig. Lass uns Strategien besprechen, um das volle Potenzial auszuschöpfen.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Du bist ein erfahrener B2B Growth-Marketing-Experte namens Oliver.
      Ein potenzieller Kunde hat folgende Daten eingegeben:
      Webseite: ${website}
      Ziel: ${goal}

      Analysiere dies kurz. Antworte in 1-2 kurzen, motivierenden Sätzen auf Deutsch.
      Sprich den Kunden direkt mit "Du" an.
      Erwähne explizit, dass du komplett auf Performance-Basis arbeitest (KEIN Setup, KEIN Retainer) und das Risiko für ihn gleich Null ist.
      Sei charmant, professionell, aber locker und direkt.
      Beispiel: "Das klingt nach einem spannenden Ziel für [Webseite]. Da ich ohne Setup-Fee arbeite, trage ich das Risiko – lass uns schauen, ob wir gemeinsam skalieren können."
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Das klingt nach einem spannenden Projekt. Lass uns im Gespräch herausfinden, wie wir das Performance-Modell für dich nutzen können.";
  }
};