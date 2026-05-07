import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Doodle from "@/components/Doodle";

export const metadata: Metadata = {
  title: "San Diego Wedding Photography & Super 8 Films",
  description:
    "San Diego wedding photographer specializing in Super 8 film and 35mm photography. Nostalgic, timeless wedding films and photos for couples in San Diego and Southern California.",
  keywords: [
    "San Diego wedding photography",
    "San Diego wedding photographer",
    "San Diego film wedding photographer",
    "Super 8 wedding film San Diego",
    "35mm wedding photography San Diego",
    "San Diego elopement photographer",
    "analog wedding photography San Diego",
    "film wedding photographer Southern California",
    "San Diego wedding videographer",
  ],
  openGraph: {
    title: "San Diego Wedding Photography & Super 8 Films | Campbell Films",
    description:
      "San Diego wedding photographer specializing in Super 8 film and 35mm photography. Nostalgic, timeless wedding films and photos for couples in San Diego and Southern California.",
    url: "https://filmsbycampbell.com/san-diego-wedding-photography",
    type: "website",
    images: [
      {
        url: "/OpenGraphImage_CF.jpg",
        width: 1200,
        height: 630,
        alt: "San Diego Wedding Photography by Campbell Films",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Wedding Photography & Super 8 Films | Campbell Films",
    description:
      "San Diego wedding photographer specializing in Super 8 film and 35mm photography. Nostalgic, timeless wedding films and photos for couples in San Diego and Southern California.",
    images: ["/OpenGraphImage_CF.jpg"],
  },
  alternates: {
    canonical: "https://filmsbycampbell.com/san-diego-wedding-photography",
  },
};

const weddingPhotos = [
  {
    src: "/images/wedding-photos/R1-03568-005A.JPG",
    alt: "Getting ready moment on 35mm film, San Diego wedding",
  },
  {
    src: "/images/wedding-photos/R1-03565-0028.JPG",
    alt: "San Diego beach wedding photographed on 35mm film",
  },
  {
    src: "/images/wedding-photos/IMG_2988.JPG",
    alt: "Candid wedding moment on analog film in San Diego",
  },
  {
    src: "/images/wedding-photos/21395-7-0009.jpg",
    alt: "Reception on 35mm film, San Diego wedding",
  },
  {
    src: "/images/wedding-photos/IMG_2983.JPG",
    alt: "Couple portrait on 35mm film, San Diego",
  },
  {
    src: "/images/wedding-photos/R1-03959-006A.JPG",
    alt: "Golden light wedding moment on 35mm film San Diego",
  },
];

const morePhotos = [
  {
    src: "/images/wedding-photos/R1-03565-0028.JPG",
    alt: "San Diego beach wedding photographed on analog film",
  },
  {
    src: "/images/wedding-photos/21395-6-0033.jpg",
    alt: "Timeless wedding portrait on 35mm film, Southern California",
  },
  {
    src: "/images/wedding-photos/R1-03566-0025.JPG",
    alt: "Outdoor ceremony in San Diego captured on Super 8 film",
  },
  {
    src: "/images/wedding-photos/21395-7-0009.jpg",
    alt: "Candid reception moment photographed on 35mm film",
  },
  {
    src: "/images/wedding-photos/R1-03568-005A.JPG",
    alt: "Bride getting ready, intimate film photography in San Diego",
  },
  {
    src: "/images/recentwork_1.jpeg",
    alt: "San Diego wedding film photography by Campbell Films",
  },
  {
    src: "/images/recentwork_2.jpeg",
    alt: "Film wedding photographer San Diego, Campbell Films",
  },
  {
    src: "/images/recentwork_3.jpeg",
    alt: "35mm wedding photography, Southern California",
  },
];

const faqs = [
  {
    question: "Do you travel outside San Diego?",
    answer: "Yes — available across Southern California and for destination weddings worldwide. Travel fees apply for locations requiring flights or overnight stays.",
  },
  {
    question: "What is Super 8 film?",
    answer: "A motion picture film format from the 1960s–70s. The footage has a warm, grainy, nostalgic quality that nothing digital can replicate — a living home movie, not a polished production.",
  },
  {
    question: "Can I book Super 8 film and 35mm photography together?",
    answer: "Yes — most couples do. See the Info & Pricing page for package details.",
  },
  {
    question: "How far in advance should I book?",
    answer: "Most couples book 9–18 months out. Spring and fall San Diego dates fill fast.",
  },
];

export default function SanDiegoWeddingPhotographyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://filmsbycampbell.com/#localbusiness",
    name: "Campbell Films",
    description:
      "San Diego wedding photographer specializing in Super 8 film and 35mm photography for weddings, elopements, and lifestyle sessions.",
    url: "https://filmsbycampbell.com",
    email: "zoe@filmsbycampbell.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7157,
      longitude: -117.1611,
    },
    areaServed: [
      { "@type": "City", name: "San Diego" },
      { "@type": "City", name: "La Jolla" },
      { "@type": "City", name: "Del Mar" },
      { "@type": "City", name: "Encinitas" },
      { "@type": "City", name: "Temecula" },
      { "@type": "State", name: "California" },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/campbelll_films",
      "https://www.tiktok.com/@campbell.films",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative mt-[61px] min-h-[calc(100vh-61px)] flex items-start justify-center overflow-hidden">
        <Image
          src="/images/wedding-photos/IMG_3019.JPG"
          alt="San Diego wedding photography by Campbell Films on 35mm film"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-olive-900/40" />
        <div className="relative z-10 text-center px-6 w-full pt-[18%] md:pt-[14%]">
          <p className="text-peach-200 uppercase tracking-[0.3em] text-base mb-6 font-light">
            Campbell Films · San Diego, CA
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-peach-50 drop-shadow-lg md:whitespace-nowrap mb-10">
            San Diego Wedding Photography
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-coral-500 hover:bg-coral-600 text-white px-12 py-5 text-base tracking-widest uppercase transition-colors duration-200"
            >
              Book Your Date
            </Link>
            <Link
              href="/portfolio"
              className="border border-peach-200 text-peach-100 hover:bg-peach-100/10 px-12 py-5 text-base tracking-widest uppercase transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Intro ────────────────────────────────────────────────────── */}
      <section className="bg-peach-50 py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[3/4] overflow-hidden shadow-lg">
            <Image
              src="/images/Hiimzoepic.JPG"
              alt="Zoe Campbell, San Diego wedding photographer and Super 8 filmmaker"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Based in San Diego · Available Worldwide
              </p>
              <h2 className="text-5xl md:text-6xl font-serif text-coral-600 leading-snug">
                Film photography for couples who want their memories to feel real
              </h2>
            </div>
            <div className="w-12 h-px bg-coral-300" />
            <p className="text-olive-700 leading-loose text-base">
              Hi, I&apos;m Zoe — a San Diego wedding photographer and Super 8 filmmaker.
              I shoot on film because it forces me to slow down and find the moments
              that actually matter.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-coral-500 hover:bg-coral-600 text-white px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Book Your Date
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid 1 ───────────────────────────────────────────── */}
      <section className="bg-peach-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-3">
                35mm Film · Super 8
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-coral-600">
                San Diego Wedding Stories
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="self-start md:self-auto text-olive-600 hover:text-coral-500 text-sm tracking-widest uppercase border-b border-olive-400 pb-0.5 hover:border-coral-400 transition-colors whitespace-nowrap"
            >
              See Full Portfolio →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
            {weddingPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Film ─────────────────────────────────────────────────── */}
      <section className="relative bg-peach-50 py-28 px-6 overflow-hidden">
        <Doodle
          src="/images/doodles/CampbellFilms_Icon_Swans.png"
          alt="Decorative swans"
          width={120}
          height={60}
          top="2.5rem"
          left="3%"
          opacity={0.35}
        />
        <Doodle
          src="/images/doodles/CampbellFilms_Icon_Birds.png"
          alt="Decorative birds"
          width={90}
          height={54}
          top="2.5rem"
          right="3%"
          opacity={0.35}
        />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">
              Shot on Analog
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-coral-600 mb-5">
              Why San Diego Couples Choose Film
            </h2>
            <div className="w-12 h-px bg-coral-300 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: "/images/doodles/CampbellFilms_Icon_Dancing.png",
                iconW: 80, iconH: 64,
                title: "Timeless Quality",
                body: "Warm tones, soft grain, and natural color — images that feel classic rather than of-the-moment.",
              },
              {
                icon: "/images/doodles/CampbellFilms_Icon_Bells.png",
                iconW: 70, iconH: 64,
                title: "Intentional Moments",
                body: "Every frame counts on film. No spray-and-pray — just deliberate, meaningful images.",
              },
              {
                icon: "/images/doodles/CampbellFilms_Icon_WineGlass.png",
                iconW: 50, iconH: 72,
                title: "Super 8 Magic",
                body: "A living home movie, not a highlight reel. Something to hand down for generations.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-5">
                <div className="flex justify-center h-16 items-end">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={item.iconW}
                    height={item.iconH}
                    className="opacity-70"
                  />
                </div>
                <div className="w-8 h-px bg-sage-400 mx-auto" />
                <h3 className="text-2xl font-serif text-olive-700">
                  {item.title}
                </h3>
                <p className="text-olive-600 leading-loose text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── San Diego Venues ─────────────────────────────────────────── */}
      <section className="bg-peach-100 py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">
                Local Knowledge
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-coral-600 leading-snug">
                San Diego&apos;s Most Beautiful Wedding Locations
              </h2>
            </div>
            <div className="w-12 h-px bg-coral-300" />
            <p className="text-olive-700 leading-loose text-base">
              Golden coastal light nearly year-round. From La Jolla cliffs to
              Temecula vineyards — San Diego is one of the finest places in the
              world to shoot on film.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "La Jolla", "Torrey Pines", "Del Mar", "Temecula",
                "Rancho Santa Fe", "Balboa Park", "Encinitas", "Coronado",
              ].map((venue) => (
                <span key={venue} className="border border-coral-300 text-olive-700 text-sm px-3 py-1">
                  {venue}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/wedding-photos/R1-03568-010A.JPG"
                alt="Outdoor wedding ceremony at a San Diego venue photographed on 35mm film"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/images/wedding-photos/R1-03568-026A.JPG"
                  alt="Wedding details at a La Jolla venue on 35mm film"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/images/wedding-photos/IMG_2983.JPG"
                  alt="Couple portraits at a San Diego wedding captured on analog film"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── More Photos ──────────────────────────────────────────────── */}
      <section className="bg-peach-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-3">
                Real couples · All on film
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-coral-600">
                More from the Field
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
            {morePhotos.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 || i === 5
                    ? "col-span-2 aspect-[16/9]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Teaser ───────────────────────────────────────────── */}
      <section className="relative bg-olive-800 py-24 px-6 text-center overflow-hidden">
        <Doodle
          src="/images/doodles/CampbellFilms_Icon_Cake.png"
          alt="Decorative wedding cake"
          width={100}
          height={90}
          bottom="2rem"
          right="6%"
          opacity={0.35}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sage-300 uppercase tracking-[0.3em] text-xs font-medium mb-4">
              Packages
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-peach-50 mb-3">
              San Diego Wedding Photography Pricing
            </h2>
            <div className="w-12 h-px bg-sage-500 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-sage-600/20 border border-sage-600/20 mb-10">
            {[
              {
                name: "Elopement",
                price: "From $1,500",
                desc: "35mm photography for intimate ceremonies up to 4 hours",
              },
              {
                name: "Wedding",
                price: "From $2,800",
                desc: "Full-day 35mm photography + Super 8 wedding film",
              },
              {
                name: "Collection",
                price: "Custom",
                desc: "Multi-day events, destination weddings, full collections",
              },
            ].map((pkg) => (
              <div key={pkg.name} className="bg-olive-800 p-12 space-y-4 text-center">
                <p className="text-sage-400 text-sm uppercase tracking-widest font-medium">
                  {pkg.name}
                </p>
                <p className="text-peach-50 text-5xl font-serif">{pkg.price}</p>
                <p className="text-peach-200/60 text-base leading-snug">
                  {pkg.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/info"
              className="bg-peach-50 hover:bg-peach-100 text-olive-800 px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Full Pricing Details
            </Link>
            <Link
              href="/contact"
              className="border border-peach-200 text-peach-100 hover:bg-peach-100/10 px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-peach-50 py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">
              Common Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-coral-600">
              San Diego Wedding Photography FAQ
            </h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-sage-200 py-8 last:border-b">
                <h3 className="text-olive-800 font-medium text-base mb-3 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-olive-500 leading-loose text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────── */}
      <section className="relative bg-olive-800 py-32 px-6 text-center overflow-hidden">
        <Doodle
          src="/images/doodles/CampbellFilms_Icon_Swans.png"
          alt="Decorative swans"
          width={160}
          height={80}
          bottom="3rem"
          left="5%"
          opacity={0.2}
        />
        <Doodle
          src="/images/doodles/CampbellFilms_Icon_Birds.png"
          alt="Decorative birds"
          width={100}
          height={60}
          top="3rem"
          right="5%"
          opacity={0.2}
        />
        <div className="relative max-w-xl mx-auto space-y-8">
          <p className="text-sage-400 uppercase tracking-[0.3em] text-xs font-medium">
            Let&apos;s Work Together
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-peach-50 leading-snug">
            Let&apos;s capture your San Diego love story
          </h2>
          <div className="w-12 h-px bg-sage-500 mx-auto" />
          <p className="text-peach-200/80 leading-loose text-base">
            Dates fill quickly — send a message to check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="bg-coral-500 hover:bg-coral-600 text-white px-12 py-5 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="border border-peach-300/40 text-peach-100 hover:bg-peach-100/10 px-12 py-5 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Browse Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
