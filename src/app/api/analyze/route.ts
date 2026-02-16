import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const PROMPT = `You are an expert AI assistant that converts handwritten notes into structured digital text.

Read the handwritten memo in the image below and organize it according to these rules:

1. **Handwriting Correction**: Analyze surrounding words and context to restore hard-to-read characters into accurate words.
2. **Remove Filler**: Exclude filler text commonly found in handwriting (e.g., "um...", "oh right", doodles).
3. **Structure**: Organize the content into the following 3 sections:

## 📅 Summary
Summarize the key content of the memo concisely.

## ✅ Action Items
List tasks and action items.

## 💡 Key Notes
Organize additional notes, ideas, and supplementary information.

4. Use **markdown formatting** for readability (bold text, lists, etc.).
5. If there is no content for a section, mark it as "N/A".
6. Respond in the SAME LANGUAGE as the handwritten notes. If the notes are in Korean, respond in Korean. If in English, respond in English. If mixed, preserve the original language for each part.`;

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "Gemini API key is not configured. Please set GEMINI_API_KEY in .env.local." },
                { status: 500 }
            );
        }

        const formData = await request.formData();
        const file = formData.get("image") as File | null;

        if (!file) {
            return NextResponse.json(
                { error: "An image file is required." },
                { status: 400 }
            );
        }

        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { error: "File size must be under 10 MB." },
                { status: 400 }
            );
        }

        // Convert file to base64
        const bytes = await file.arrayBuffer();
        const base64 = Buffer.from(bytes).toString("base64");
        const mimeType = file.type || "image/jpeg";

        // Call Gemini API
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent([
            PROMPT,
            {
                inlineData: {
                    data: base64,
                    mimeType,
                },
            },
        ]);

        const response = result.response;
        const text = response.text();

        if (!text) {
            return NextResponse.json(
                { error: "No response received from AI." },
                { status: 500 }
            );
        }

        return NextResponse.json({ result: text });
    } catch (error: unknown) {
        console.error("Gemini API error:", error);

        const message =
            error instanceof Error ? error.message : "An unexpected error occurred.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}
