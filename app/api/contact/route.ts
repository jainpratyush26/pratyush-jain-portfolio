import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["jain.pratyush26@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${topic ? `${topic} — ` : ""}message from ${name}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f8f6; border-radius: 12px;">
          <h2 style="margin: 0 0 4px; color: #111; font-size: 20px;">New message via pratyushjain.com</h2>
          <p style="margin: 0 0 24px; color: #888; font-size: 14px;">via the portfolio contact form</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #888; font-size: 13px; width: 100px;">From</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 14px;"><a href="mailto:${email}" style="color: #4338ca;">${email}</a></td>
            </tr>
            ${topic ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #888; font-size: 13px;">Topic</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 14px;">${topic}</td>
            </tr>` : ""}
          </table>

          <div style="background: white; border-radius: 8px; padding: 16px; border: 1px solid #e5e5e5;">
            <p style="margin: 0; color: #444; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin: 20px 0 0; color: #bbb; font-size: 12px;">
            Hit reply to respond directly to ${name} at ${email}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
