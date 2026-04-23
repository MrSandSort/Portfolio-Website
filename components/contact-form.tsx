"use client";

import { useMemo, useState } from "react";

import { profile } from "@/lib/portfolio-data";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = {
  type: "idle" | "error" | "success";
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const canSubmit = useMemo(
    () => Boolean(form.name.trim() && form.email.trim() && form.message.trim()),
    [form.email, form.message, form.name]
  );

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (!canSubmit) {
      setStatus({ type: "error", message: "Name, email, and project details are required." });
      return;
    }

    if (!emailIsValid) {
      setStatus({ type: "error", message: "Enter a valid email address." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company || "Not provided"}`,
        "",
        form.message
      ].join("\n")
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      message: "Your default mail client should open with a prefilled message." 
    });
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="panel p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-muted sm:col-span-1">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="input-field"
            placeholder="Sandesh Paudel"
            required
          />
        </label>

        <label className="space-y-2 text-sm text-muted sm:col-span-1">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="input-field"
            placeholder="paudelsandesh309@gmail.com"
            required
          />
        </label>

        <label className="space-y-2 text-sm text-muted sm:col-span-2">
          <span>Company</span>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="input-field"
            placeholder="Islington College Pvt.Ltd."
          />
        </label>

        <label className="space-y-2 text-sm text-muted sm:col-span-2">
          <span>Project brief</span>
          <textarea
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="input-field min-h-[160px] resize-none"
            placeholder="Share your details & ideas..."
            required
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className={`text-sm ${
            status.type === "error"
              ? "text-rose-500"
              : status.type === "success"
                ? "text-emerald-500"
                : "text-muted"
          }`}
        >
          {status.message || "This form uses "}
        </p>

        <button type="submit" className="button-primary" disabled={!canSubmit}>
          Send Message
        </button>
      </div>
    </form>
  );
}
