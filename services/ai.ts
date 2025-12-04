
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedAdContent } from "../types";

// Initialize Gemini Client
// Note: In a production environment, this should be handled via a backend proxy to protect the API key.
// For this demo, we are using the environment variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateAdVariations(
  prompt: string, 
  objective: string,
  budget: string
): Promise<GeneratedAdContent> {
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 3 distinct ad copy variations for a marketing campaign.
      
      Context:
      Product/Service Description: ${prompt}
      Campaign Objective: ${objective}
      Daily Budget: $${budget}
      
      For each variation, provide:
      1. A catchy Headline (max 40 chars)
      2. Primary Text/Body (max 125 chars)
      3. A Call to Action (CTA) (e.g., Sign Up, Learn More, Shop Now)
      
      Ensure the tone is professional yet persuasive.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            variations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  headline: { type: Type.STRING },
                  body: { type: Type.STRING },
                  cta: { type: Type.STRING }
                },
                required: ["headline", "body", "cta"]
              }
            }
          },
          required: ["variations"]
        }
      }
    });

    const jsonStr = response.text;
    if (!jsonStr) {
        throw new Error("No response from AI");
    }
    
    return JSON.parse(jsonStr) as GeneratedAdContent;

  } catch (error) {
    console.error("Error generating ad content:", error);
    // Fallback content in case of API failure or missing key
    return {
      variations: [
        {
          headline: "Scale your ads with AI.",
          body: "Stop manually copying ads. Use Northbound to automate your workflow.",
          cta: "Get Started"
        },
        {
          headline: "Launch faster. Spend less.",
          body: "The operating system for modern performance marketing teams.",
          cta: "Try Free"
        },
        {
          headline: "Unified Ad Dashboard",
          body: "Manage Meta, Google, and TikTok ads from one place.",
          cta: "Learn More"
        }
      ]
    };
  }
}
