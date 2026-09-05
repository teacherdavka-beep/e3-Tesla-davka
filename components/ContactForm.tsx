"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = { name: "", email: "", phone: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  return errors;
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  autoComplete: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Field({ id, label, type, value, placeholder, autoComplete, error, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink/80">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
          error ? "border-red-400" : "border-border focus:border-accent"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setValues(INITIAL_STATE);
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xl font-medium">Message sent</p>
        <p className="max-w-sm text-base text-ink/70">
          Thanks for reaching out — a member of our team will follow up within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-base font-medium text-accent underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border p-8 sm:p-10">
      <div className="mb-8 flex flex-col gap-2">
        <p className="text-xl font-medium">Prefer we reach out?</p>
        <p className="text-base text-ink/60">Leave your details and our team will follow up.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Field
            id="contact-name"
            label="Name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Jane Doe"
            autoComplete="name"
            error={errors.name}
          />
          <Field
            id="contact-email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="jane@example.com"
            autoComplete="email"
            error={errors.email}
          />
          <Field
            id="contact-phone"
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            error={errors.phone}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center self-start rounded-full bg-ink px-7 py-3 text-base font-medium text-white transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
