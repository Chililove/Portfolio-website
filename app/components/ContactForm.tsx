// Contact form (client component): posts to /api/contact and shows send status.

"use client";

import { useState } from "react";

// The four things the form can be doing at any moment.
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser's default page-reload on submit
    setStatus("sending");

    // FormData is a tidy way to read every field by its `name` attribute.
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset(); // clear the fields after a successful send
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message here..."
          required
        />
      </div>

      <button
        type="submit"
        className="button button-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {/* Friendly status messages shown after the visitor clicks Send. */}
      {status === "sent" && (
        <p className="form-status">
          Thanks! Your message was sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="form-status--error">
          Sorry, something went wrong. Please email me directly instead.
        </p>
      )}
    </form>
  );
}
