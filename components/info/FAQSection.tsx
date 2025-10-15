"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you travel?",
      answer:
        "Yes! Travel fees aren't included in the pricing, but I'm happy to go wherever your day takes us.",
    },
    {
      question: "Why Super8/film?",
      answer:
        "Film catches what you don't always notice—the small gestures, candid shots, laughter, and fleeting moments. It feels personal, nostalgic, and timeless, giving your memories a tangible, lasting quality.",
    },
    {
      question: "Where are you based?",
      answer: "San Diego / Southern California.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "If the standard packages don't fit what you're looking for, send me a message and we'll build a package that works for you.",
    },
    {
      question: "What are your bucket-list locations?",
      answer:
        "I offer discounts for destination shoots in places like Iceland, Australia, Ireland, Portugal, Maine, and Indonesia. Let's make your dream location happen!",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h2 className="text-4xl font-serif text-coral-600 mb-12 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-sage-50 rounded-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage-100 transition-colors"
            >
              <span className="font-medium text-olive-800 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-olive-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5">
                <p className="text-olive-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
