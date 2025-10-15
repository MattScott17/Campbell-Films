"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., email service, API endpoint)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
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

      <button
        type="submit"
        className="w-full bg-coral-500 text-peach-50 py-4 rounded-sm hover:bg-coral-600 transition-colors font-medium tracking-wide uppercase text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
