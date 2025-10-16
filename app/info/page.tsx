import type { Metadata } from "next";
import PricingSection from "@/components/info/PricingSection";
import FAQSection from "@/components/info/FAQSection";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description: "Wedding and elopement photography packages starting at $1,500. Super 8 film and 35mm photography for couples in Southern California and destination weddings.",
  openGraph: {
    title: "Pricing & Packages | Campbell Films",
    description: "Wedding and elopement photography packages starting at $1,500. Super 8 film and 35mm photography for couples in Southern California and destination weddings.",
    url: "https://filmsbycampbell.com/info",
    type: "website",
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Campbell Films Pricing',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Packages | Campbell Films",
    description: "Wedding and elopement photography packages starting at $1,500. Super 8 film and 35mm photography for couples in Southern California and destination weddings.",
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: "https://filmsbycampbell.com/info",
  },
};

export default function InfoPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-softBrown-500 mb-12 text-center">
          Info & Pricing
        </h1>

        <PricingSection />
        <FAQSection />
      </div>
    </div>
  );
}
