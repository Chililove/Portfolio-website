// =============================================================================
//  CONTACT API ROUTE  —  the server code that actually sends the email
// =============================================================================
//  In Next.js (App Router), a file at app/api/<name>/route.ts becomes a small
//  backend endpoint. This one lives at "/api/contact" and handles POST
//  requests. The contact form sends the visitor's message here, and this code
//  uses Resend (an email service) to email it to me.
//
//  IMPORTANT — this needs one secret to work: a Resend API key.
//  Until the key is set, the form will show a friendly error instead of crashing.
// =============================================================================

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteContent } from "@/data/siteContent";

// Read the secret key from an environment variable (never hard-code secrets!).
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Read the data the form sent us.
    const { name, email, message } = await request.json();

    // 2. Basic validation — make sure nothing important is empty.
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and a message." },
        { status: 400 }
      );
    }

    // 3. Safety check: make sure the key exists before trying to send.
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email is not configured yet (missing RESEND_API_KEY)." },
        { status: 500 }
      );
    }

    // 4. Send the email through Resend.
    //    - `from` must be an address Resend allows. Before you verify your own
    //      domain, Resend lets you send from "onboarding@resend.dev".
    //    - `to` is MY email (pulled from data/siteContent.ts).
    //    - `replyTo` is the visitor's email, so I can just hit "Reply".
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: siteContent.contact.email,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      // Resend reported a problem (e.g. bad key). Log it for you, hide details.
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again later." },
        { status: 500 }
      );
    }

    // 5. Success!
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
