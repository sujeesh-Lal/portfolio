import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Log to console in development; swap this for Resend/SendGrid/Nodemailer in production.
  // To wire up email: set RESEND_API_KEY in Vercel env vars and install `resend` package.
  console.log("Contact form submission:", { name, email, message });

  // If RESEND_API_KEY is present, send via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["sujeeshdl@gmail.com"],
        subject: `Portfolio contact from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
