"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xwpranzq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or email me directly at zoe@filmsbycampbell.com");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Unable to send message. Please try again or email me directly at zoe@filmsbycampbell.com");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-olive-700 mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-peach-50 border border-sage-200 rounded-sm focus:outline-none focus:border-coral-400 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-olive-700 mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-peach-50 border border-sage-200 rounded-sm focus:outline-none focus:border-coral-400 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-olive-700 mb-2"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-peach-50 border border-sage-200 rounded-sm focus:outline-none focus:border-coral-400 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-olive-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-peach-50 border border-sage-200 rounded-sm focus:outline-none focus:border-coral-400 transition-colors resize-none"
          placeholder="Tell me about your story, your day, and what you want it to feel like..."
        />
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div className="p-4 bg-sage-100 border border-sage-300 rounded-sm">
          <p className="text-olive-800 font-medium text-center">
            ✓ Thank you for your message! I&apos;ll be in touch soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="p-4 bg-coral-100 border border-coral-300 rounded-sm">
          <p className="text-coral-800 text-sm text-center">
            {errorMessage}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-coral-500 text-peach-50 py-4 rounded-sm hover:bg-coral-600 transition-colors font-medium tracking-wide uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
