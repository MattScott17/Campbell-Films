import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import Gallery from "@/components/home/Gallery";
import WhyFilmSection from "@/components/home/WhyFilmSection";
import BucketListSection from "@/components/home/BucketListSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Gallery />
      <WhyFilmSection />
      <BucketListSection />
    </>
  );
}
