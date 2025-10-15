import PricingSection from "@/components/info/PricingSection";
import FAQSection from "@/components/info/FAQSection";

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
