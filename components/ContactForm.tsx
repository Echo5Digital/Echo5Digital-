'use client';

import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, Loader2, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void | Promise<void>;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
  showAppointmentNote?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm({
  onSubmit,
  heading = 'Start Your Project',
  subheading = "Tell us about your vision and we'll transform it into a digital reality.",
  submitLabel = 'Send Message',
  showAppointmentNote = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone && !/^[\+\d\s\-\(\)]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      await onSubmit?.(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    'w-full bg-[#0D1226] border border-[#7C3AED]/30 rounded-[0.75rem] px-4 py-3 pl-11 text-[#E5E7EB] placeholder-[#6B7280] text-sm font-[Inter] transition-all duration-200 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#7C3AED]/30 focus:bg-[#10152b] hover:border-[#7C3AED]/50';

  const inputError = 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20';

  return (
    <div
      className="relative w-full max-w-2xl mx-auto"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Background glow */}
      <div
        className="absolute -inset-px rounded-[1rem] opacity-60 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(168,85,247,0.08) 100%)',
          boxShadow: '0 0 60px rgba(124,58,237,0.2)',
        }}
      />

      <div
        className="relative rounded-[1rem] border border-[#7C3AED]/20 overflow-hidden"
        style={{ backgroundColor: '#0D1226' }}
      >
        {/* Header */}
        <div
          className="px-8 pt-8 pb-6 border-b border-[#7C3AED]/10"
          style={{
            background:
              'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)',
          }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-[#E5E7EB] mb-2 tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {heading}
          </h2>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">{subheading}</p>
          {showAppointmentNote && (
            <div className="mt-3 inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
              <span className="text-[#A855F7] text-xs font-medium">
                Usually respond within 24 hours
              </span>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  boxShadow: '0 0 30px rgba(124,58,237,0.3)',
                }}
              >
                <CheckCircle className="w-8 h-8 text-[#A855F7]" />
              </div>
              <h3
                className="text-xl font-bold text-[#E5E7EB]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Message Sent!
              </h3>
              <p className="text-[#9CA3AF] text-sm max-w-xs">
                Thank you for reaching out. Our team will get back to you shortly.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-2 text-[#A855F7] text-sm underline underline-offset-2 hover:text-[#7C3AED] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">
                  Full Name <span className="text-[#A855F7]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={`${inputBase} ${errors.name ? inputError : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1 pl-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">
                    Email <span className="text-[#A855F7]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`${inputBase} ${errors.email ? inputError : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1 pl-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">
                    Phone{' '}
                    <span className="text-[#6B7280] normal-case tracking-normal font-normal">
                      (optional)
                    </span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`${inputBase} ${errors.phone ? inputError : ''}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="text-red-400 text-xs mt-1 pl-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">
                  Message <span className="text-[#A855F7]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#6B7280] pointer-events-none" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    className={`${inputBase} pl-11 resize-none leading-relaxed`}
                    style={{ paddingLeft: '2.75rem' }}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </div>
                <div className="flex justify-between items-center">
                  {errors.message ? (
                    <p id="message-error" className="text-red-400 text-xs pl-1">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-[#4B5563] text-xs">
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: isLoading
                    ? 'rgba(124,58,237,0.6)'
                    : 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                  boxShadow: isLoading
                    ? 'none'
                    : '0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    (e.currentTarget as HTMLButtonElement).style.filter =
                      'brightness(1.15)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      '0 0 30px rgba(124,58,237,0.65), 0 6px 20px rgba(124,58,237,0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.filter = '';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = isLoading
                    ? 'none'
                    : '0 0 20px rgba(124,58,237,0.45), 0 4px 15px rgba(124,58,237,0.3)';
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {submitLabel}
                  </>
                )}
              </button>

              <p className="text-center text-[#4B5563] text-xs">
                By submitting, you agree to our{' '}
                <a href="#" className="text-[#7C3AED] hover:text-[#A855F7] transition-colors underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}