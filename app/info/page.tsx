import type { Metadata } from "next";
import PricingSection from "@/components/info/PricingSection";
import FAQSection from "@/components/info/FAQSection";
import Doodle from "@/components/Doodle";

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
        url: '/OpenGraphImage_CF.jpg',
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
    images: ['/OpenGraphImage_CF.jpg'],
  },
  alternates: {
    canonical: "https://filmsbycampbell.com/info",
  },
};

export default function InfoPage() {
  return (
    <div className="relative pt-24 pb-20 px-6">
      {/* Desktop */}
      <Doodle
        src="/images/doodles/CampbellFilms_Icon_Swans.png"
        alt="Decorative swans"
        width={160}
        height={80}
        top="8.5rem"
        left="20%"
        opacity={0.6}
      />
      <Doodle
        src="/images/doodles/CampbellFilms_Icon_Dancing.png"
        alt="Decorative dancing couple"
        width={130}
        height={100}
        top="7.0rem"
        right="23%"
        opacity={0.6}
      />
      {/* Mobile */}
      <Doodle
        src="/images/doodles/CampbellFilms_Icon_Swans.png"
        alt="Decorative swans"
        width={75}
        height={38}
        top="6.5rem"
        left="5%"
        opacity={0.6}
        hideOnMobile={false}
        hideOnDesktop={true}
      />
      <Doodle
        src="/images/doodles/CampbellFilms_Icon_Dancing.png"
        alt="Decorative dancing couple"
        width={60}
        height={45}
        top="6rem"
        right="10%"
        opacity={0.6}
        hideOnMobile={false}
        hideOnDesktop={true}
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-softBrown-500 mb-6 text-center">
          Info & Pricing
        </h1>

        <PricingSection />
        <FAQSection />
      </div>
    </div>
  );
}
