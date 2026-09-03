"use client";

import { useState } from "react";
import { Calendar, Send, CheckCircle, Loader2 } from "lucide-react";

export default function TeamClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please tell us a bit about your goals.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-[#0D1226] border border-[#7C3AED]/30 rounded-xl px-4 py-3 text-[#E5E7EB] placeholder-[#6B7280] text-sm font-[Inter] transition-all duration-200 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#7C3AED]/30 hover:border-[#7C3AED]/50";

  if (submitted) {
    return (
      <div
        className="w-full flex flex-col items-center gap-4 py-10 px-6 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(124,58,237,0.3)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(124,58,237,0.15)",
            boxShadow: "0 0 30px rgba(124,58,237,0.3)",
          }}
        >
          <CheckCircle className="w-8 h-8" style={{ color: "#A855F7" }} />
        </div>
        <h3
          className="text-xl font-bold"
          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#E5E7EB" }}
        >
          Request Received!
        </h3>
        <p
          className="text-sm text-center max-w-xs"
          style={{ color: "rgba(229,231,235,0.65)", fontFamily: "Inter, sans-serif" }}
        >
          A member of the Echo5 Digital team will reach out within one business day to schedule your strategy call.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
          className="text-sm underline underline-offset-2 transition-colors"
          style={{ color: "#A855F7" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Calendar link option */}
      <a
        href="/contact"
        className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
          boxShadow: "0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)",
          fontFamily: "Inter, sans-serif",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 0 30px rgba(124,58,237,0.65), 0 6px 20px rgba(124,58,237,0.4)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)";
        }}
      >
        <Calendar className="w-4 h-4" />
        Book a Free Strategy Call
      </a>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.2)" }} />
        <span className="text-xs" style={{ color: "rgba(229,231,235,0.4)", fontFamily: "Inter, sans-serif" }}>
          or send a quick message
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.2)" }} />
      </div>

      {/* Short form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4 w-full"
        aria-label="Demo request form"
      >
        <div>
          <label
            htmlFor="demo-name"
            className="block text-xs font-medium uppercase tracking-wider mb-1.5"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Your Name <span style={{ color: "#A855F7" }}>*</span>
          </label>
          <input
            id="demo-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={`${inputBase}${errors.name ? " border-red-500/60 focus:border-red-500" : ""}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "demo-name-error" : undefined}
          />
          {errors.name && (
            <p id="demo-name-error" className="text-red-400 text-xs mt-1 pl-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="demo-email"
            className="block text-xs font-medium uppercase tracking-wider mb-1.5"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            Email Address <span style={{ color: "#A855F7" }}>*</span>
          </label>
          <input
            id="demo-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={`${inputBase}${errors.email ? " border-red-500/60 focus:border-red-500" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "demo-email-error" : undefined}
          />
          {errors.email && (
            <p id="demo-email-error" className="text-red-400 text-xs mt-1 pl-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="demo-message"
            className="block text-xs font-medium uppercase tracking-wider mb-1.5"
            style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
          >
            What are your marketing goals? <span style={{ color: "#A855F7" }}>*</span>
          </label>
          <textarea
            id="demo-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your business and what you'd like to achieve..."
            rows={4}
            className={`${inputBase} resize-none leading-relaxed${errors.message ? " border-red-500/60 focus:border-red-500" : ""}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "demo-message-error" : undefined}
          />
          {errors.message && (
            <p id="demo-message-error" className="text-red-400 text-xs mt-1 pl-1">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-semibold text-white text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            background: loading
              ? "rgba(124,58,237,0.6)"
              : "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
            boxShadow: loading
              ? "none"
              : "0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)",
            fontFamily: "Inter, sans-serif",
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.15)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 30px rgba(124,58,237,0.65), 0 6px 20px rgba(124,58,237,0.4)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.filter = "";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = loading
              ? "none"
              : "0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)";
          }}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Request a Demo
            </>
          )}
        </button>

        <p className="text-center text-xs" style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}>
          By submitting, you agree to our{" "}
          <a
            href="/privacy-policy"
            className="underline underline-offset-2 transition-colors hover:text-purple-400"
            style={{ color: "#7C3AED" }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}