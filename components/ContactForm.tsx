"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      nextErrors.email = "Please enter a valid email.";
    if (!message || message.length < 10)
      nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card flex flex-col items-center gap-3 p-10 text-center"
      >
        <CheckCircle2 className="text-circuit" size={40} />
        <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-ash-500 dark:text-ash-400">
          Thanks for reaching out — a reply will land in your inbox soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2 !py-2 text-sm"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8" noValidate>
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ash-500"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Doe"
          className="w-full rounded-lg border border-ash-300/60 dark:border-ink-border bg-white/60 dark:bg-ink-soft px-4 py-2.5 text-sm text-ash-900 dark:text-ash-100 outline-none transition-colors focus:border-signal"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ash-500"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-ash-300/60 dark:border-ink-border bg-white/60 dark:bg-ink-soft px-4 py-2.5 text-sm text-ash-900 dark:text-ash-100 outline-none transition-colors focus:border-signal"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ash-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="w-full resize-none rounded-lg border border-ash-300/60 dark:border-ink-border bg-white/60 dark:bg-ink-soft px-4 py-2.5 text-sm text-ash-900 dark:text-ash-100 outline-none transition-colors focus:border-signal"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong sending that. Please try again, or email
          directly using the address below.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
