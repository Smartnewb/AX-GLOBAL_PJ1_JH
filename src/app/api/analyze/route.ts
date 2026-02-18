import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const TRANSCRIBE_PROMPT = `You are a strict OCR transcription engine.

Task:
- Read the handwriting in the image and transcribe it as faithfully as possible.

Rules:
1. Preserve original language/script and line order.
2. Do NOT translate, summarize, infer, or clean up content.
3. Do NOT add words not present in the image.
4. If a token is unclear, use "[Unreadable]".
5. Return plain text only (no markdown, no commentary).`;

const STRUCTURE_PROMPT = `You are "Mezmo Change", an expert AI assistant that transforms messy handwriting into structured, actionable digital assets.
Your goal is to "Change" scribbles into smart notes in seconds.

You will receive OCR transcription text. Convert it into the following 3-part markdown format:

## 📅 Summary
( concisely summarize the core message in 1-2 sentences. )

## ✅ Action Items
( List only tasks explicitly present in the transcription. If none, use a short placeholder like "No action items" / "실행할 항목 없음". )

## 💡 Key Notes
( Organize remaining details into concise bullet points. )

**Rules:**
1. **Source of Truth**: Use only the provided transcription text.
2. **Correction**: You may correct obvious OCR typos if context is clear.
3. **Format**: Use **Bold** for important terms. Use bullet points for readability.
4. **Language**: Keep output in the same language as the transcription's main language.
5. **No Hallucination**: Do NOT invent new facts, names, actions, or intentions.
6. **Low Confidence Handling**: Keep "[Unreadable]" where needed instead of guessing.
7. **Handling Empty Sections**: If a section has no content, write "N/A" or a brief culturally appropriate placeholder.`;

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
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            generationConfig: {
                temperature: 0.1,
                topP: 0.2,
                topK: 16,
            },
        });

        const ocrResult = await model.generateContent([
            TRANSCRIBE_PROMPT,
            {
                inlineData: {
                    data: base64,
                    mimeType,
                },
            },
        ]);

        const transcription = ocrResult.response.text().trim();

        if (!transcription) {
            return NextResponse.json(
                { error: "No transcription received from AI." },
                { status: 500 }
            );
        }

        const structuredResult = await model.generateContent([
            STRUCTURE_PROMPT,
            `OCR Transcription:\n${transcription}`,
        ]);

        const finalText = structuredResult.response.text().trim();
        if (!finalText) {
            return NextResponse.json(
                { error: "No structured response received from AI." },
                { status: 500 }
            );
        }

        return NextResponse.json({ result: finalText });
    } catch (error: unknown) {
        console.error("Gemini API error:", error);

        const message =
            error instanceof Error ? error.message : "An unexpected error occurred.";

        return NextResponse.json({ error: message }, { status: 500 });
    }
}
