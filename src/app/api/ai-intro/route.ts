import { NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  const prompt = `
Customer:
${JSON.stringify(body.customer)}

Match:
${JSON.stringify(body.match)}

Explain why they are compatible in under 80 words.
`;

  const result =
    await model.generateContent(
      prompt
    );

  return NextResponse.json({
    explanation:
      result.response.text(),
  });
}