import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const PROMPT = `You are "Mezmo Change", an expert AI assistant that transforms messy handwriting into structured, actionable digital assets.
Your goal is to "Change" scribbles into smart notes in seconds.

Analyze the handwritten image provided and output the content strictly in the following 3-part markdown format:

## 📅 Summary
( concisely summarize the core message of the note in 1-2 sentences. )

## ✅ Action Items
( List only tasks, to-dos, or next steps that are explicitly written in the note. If none are explicit, write a brief placeholder such as "No action items" / "실행할 항목 없음". )

## 💡 Key Notes
( Organize the remaining details, ideas, and context into bullet points. )

**Rules:**
1. **Correction**: Fix spelling errors and clarify ambiguous handwriting based on context.
2. **De-clutter**: Remove filler words ("um", "uh"), doodles, and irrelevant marks.
3. **Format**: Use **Bold** for important terms. Use bullet points for readability.
4. **Language**: Respond in the SAME LANGUAGE as the handwritten notes.
   - If Korean -> Korean response.
   - If English -> English response.
   - If mixed -> Preserve the primary language of each section.
5. **No Hallucination**: Do NOT invent new facts, names, actions, or intentions that are not present in the handwriting.
6. **Low Confidence Handling**: If any part is hard to read, mark it as "[Unreadable]" (or localized equivalent) instead of guessing.
7. **Handling Empty Sections**: If a section has no content, write "N/A" or a brief culturally appropriate placeholder (e.g., "No action items" / "실행할 항목 없음").`;

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
