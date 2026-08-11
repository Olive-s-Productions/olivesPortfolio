import { NextResponse } from "next/server";

// REPLACE_ME: This endpoint currently validates and logs the submission only.
// Wire it up to a real email/CRM service before going live — e.g. Resend,
// SendGrid, Postmark, or a Google Sheets / Airtable webhook. Add the
// provider's API key as an environment variable (e.g. in Vercel project
// settings) rather than hardcoding it here.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { ok: false, error: "Invalid submission." },
        { status: 400 }
      );
    }

    // Placeholder: log server-side until a real provider is connected.
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request." },
      { status: 500 }
    );
  }
}
