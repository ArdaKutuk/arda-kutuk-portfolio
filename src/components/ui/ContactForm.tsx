"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon } from "./icons";
import type { Dictionary } from "@/i18n/types";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues, dict: Dictionary): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = dict.contact.form.nameError;
  if (!values.email.trim()) {
    errors.email = dict.contact.form.emailRequiredError;
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = dict.contact.form.emailInvalidError;
  }
  if (!values.message.trim()) errors.message = dict.contact.form.messageError;
  return errors;
}

const fieldClass =
  "border-none border-b bg-transparent px-0 py-2.5 text-base font-sans text-ink focus:outline-none";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values, dict);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-3xl bg-card p-7">
        <p className="text-[1rem] font-bold text-ink m-0">
          {dict.contact.form.successTitle.replace("{name}", values.name)}
        </p>
        <p className="text-[0.9rem] leading-[1.6] text-body m-0">
          {dict.contact.form.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[18px]">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-[12px] tracking-[0.06em] text-muted">
          {dict.contact.form.nameLabel}
        </label>
        <input
          id="contact-name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`${fieldClass} ${errors.name ? "border-accent" : "border-[oklch(70%_0.008_75)]"}`}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-[0.8rem] text-accent m-0">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-[12px] tracking-[0.06em] text-muted">
          {dict.contact.form.emailLabel}
        </label>
        <input
          id="contact-email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`${fieldClass} ${errors.email ? "border-accent" : "border-[oklch(70%_0.008_75)]"}`}
        />
        {errors.email && (
          <p id="contact-email-error" className="text-[0.8rem] text-accent m-0">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-[12px] tracking-[0.06em] text-muted">
          {dict.contact.form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${fieldClass} resize-y ${errors.message ? "border-accent" : "border-[oklch(70%_0.008_75)]"}`}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-[0.8rem] text-accent m-0">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-2 inline-flex items-center gap-4 self-start rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-sm tracking-[0.02em] text-bg cursor-pointer transition-opacity hover:opacity-85 disabled:opacity-60 disabled:cursor-wait"
      >
        <span>{status === "submitting" ? dict.contact.form.sending : dict.contact.form.send}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-200 group-hover:rotate-45">
          <ArrowUpRightIcon />
        </span>
      </button>
      <p className="text-[0.85rem] text-muted mt-1 m-0">{dict.contact.form.disclaimer}</p>
    </form>
  );
}
