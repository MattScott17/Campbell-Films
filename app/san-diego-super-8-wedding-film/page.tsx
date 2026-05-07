import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Doodle from "@/components/Doodle";

export const metadata: Metadata = {
  title: "San Diego Super 8 Wedding Film",
  description:
    "San Diego Super 8 wedding filmmaker capturing your love story on real motion picture film. Warm, nostalgic, cinematic wedding films for couples in San Diego and Southern California.",
  keywords: [
    "San Diego Super 8 wedding film",
    "Super 8 wedding filmmaker San Diego",
    "Super 8 wedding video San Diego",
    "analog wedding film San Diego",
    "Super 8 film wedding videographer",
    "San Diego wedding videographer",
    "Super 8 wedding Southern California",
    "film wedding videographer San Diego",
    "cinematic wedding film San Diego",
  ],
  openGraph: {
    title: "San Diego Super 8 Wedding Film | Campbell Films",
    description:
      "San Diego Super 8 wedding filmmaker capturing your love story on real motion picture film. Warm, nostalgic, cinematic wedding films for couples in San Diego and Southern California.",
    url: "https://filmsbycampbell.com/san-diego-super-8-wedding-film",
    type: "website",
    images: [
      {
        url: "/OpenGraphImage_CF.jpg",
        width: 1200,
        height: 630,
        alt: "San Diego Super 8 Wedding Film by Campbell Films",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Super 8 Wedding Film | Campbell Films",
    description:
      "San Diego Super 8 wedding filmmaker capturing your love story on real motion picture film. Warm, nostalgic, cinematic wedding films for couples in San Diego and Southern California.",
    images: ["/OpenGraphImage_CF.jpg"],
  },
  alternates: {
    canonical: "https://filmsbycampbell.com/san-diego-super-8-wedding-film",
  },
};

const weddingPhotos = [
  {
    src: "/images/wedding-photos/R1-03568-005A.JPG",
    alt: "Getting ready moment on Super 8 film, San Diego wedding",
  },
  {
    src: "/images/wedding-photos/R1-03565-0028.JPG",
    alt: "San Diego beach wedding captured on Super 8 film",
  },
  {
    src: "/images/wedding-photos/IMG_2988.JPG",
    alt: "Candid wedding moment on analog film in San Diego",
  },
  {
    src: "/images/wedding-photos/21395-7-0009.jpg",
    alt: "Reception on Super 8 film, San Diego wedding",
  },
  {
    src: "/images/wedding-photos/IMG_2983.JPG",
    alt: "Couple portrait on 35mm film, San Diego",
  },
  {
    src: "/images/wedding-photos/R1-03959-006A.JPG",
    alt: "Golden light wedding moment on Super 8 film San Diego",
  },
];

const morePhotos = [
  {
    src: "/images/wedding-photos/R1-03565-0028.JPG",
    alt: "San Diego beach wedding on Super 8 film",
  },
  {
    src: "/images/wedding-photos/21395-6-0033.jpg",
    alt: "Super 8 wedding film still, Southern California coast",
  },
  {
    src: "/images/wedding-photos/R1-03566-0025.JPG",
    alt: "Outdoor ceremony Super 8 film San Diego",
  },
  {
    src: "/images/wedding-photos/21395-7-0009.jpg",
    alt: "Reception on Super 8 film, San Diego wedding",
  },
  {
    src: "/images/wedding-photos/R1-03568-005A.JPG",
    alt: "Getting ready moment on Super 8 film San Diego",
  },
  {
    src: "/images/recentwork_5.jpeg",
    alt: "Super 8 wedding film by Campbell Films San Diego",
  },
  {
    src: "/images/recentwork_3.jpeg",
    alt: "Analog wedding film, Southern California",
  },
  {
    src: "/images/recentwork_2.jpeg",
    alt: "Super 8 film wedding videographer San Diego",
  },
];

const faqs = [
  {
    question: "What exactly is Super 8 film?",
    answer:
      "Super 8 is a format of motion picture film — real celluloid, shot through a camera, developed in a lab, and scanned to digital for editing. It was popularized in the 1960s and 70s as a home movie format. The footage has a warm, saturated, grain-textured quality that no digital camera or filter can truly replicate. It feels like a treasured memory before you even watch it.",
  },
  {
    question: "How is Super 8 film different from a regular wedding video?",
    answer:
      "A standard wedding video is typically shot on digital cameras and edited into a highlight reel. A Super 8 wedding film is something entirely different — it's shot on actual motion picture film, developed and scanned by a lab, then carefully edited into a living, breathing home movie. The texture, the light, the imperfections — they all add up to something that feels genuine and timeless rather than polished and produced.",
  },
  {
    question: "Can I get both Super 8 film and 35mm photography?",
    answer:
      "Yes — and most couples do. Having both a wedding film and photos means every dimension of your day is documented. Campbell Films packages are designed to combine Super 8 film with 35mm analog photography seamlessly. Visit the Info & Pricing page to see current package options.",
  },
  {
    question: "How long will my Super 8 wedding film be?",
    answer:
      "Super 8 wedding films are typically 4–8 minutes long — long enough to tell the full story of your day, short enough to watch again and again. Unlike a traditional wedding video, the goal isn't to document everything; it's to capture the feeling. Every roll of Super 8 film is carefully chosen and every edit is intentional.",
  },
  {
    question: "Do you film in San Diego year-round?",
    answer:
      "Yes. San Diego's mild climate and golden coastal light make it an exceptional location for Super 8 film year-round. Super 8 film responds beautifully to natural light — the warm Southern California sun gives footage a rich, cinematic quality that cooler, overcast light can't match.",
  },
  {
    question: "When will I receive my Super 8 wedding film?",
    answer:
      "Super 8 film is physical — it gets shipped to a lab for developing and scanning after your wedding, then edited by hand. Delivery is typically 12–14 weeks after your wedding date. This isn't digital video that's turned around in a week; it's a craft process that takes time to do properly. The wait is worth it.",
  },
];

export default function SanDiegoSuper8WeddingFilmPage() {
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
      "San Diego Super 8 wedding filmmaker and 35mm film photographer specializing in analog wedding films and photography.",
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
          alt="San Diego Super 8 wedding film by Campbell Films"
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
            San Diego Super 8 Wedding Film
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
              alt="Zoe Campbell, San Diego Super 8 wedding filmmaker"
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
                Your wedding day deserves to feel like a film
              </h2>
            </div>
            <div className="w-12 h-px bg-coral-300" />
            <p className="text-olive-700 leading-loose text-base">
              Hi, I&apos;m Zoe — a San Diego Super 8 wedding filmmaker and 35mm
              photographer. I shoot on real motion picture film because nothing
              else captures the warmth, the texture, and the emotion of a wedding
              day quite like it. Not a filter. Not a preset. Actual film.
            </p>
            <p className="text-olive-700 leading-loose text-base">
              A Super 8 wedding film isn&apos;t a highlight reel — it&apos;s a living home
              movie. The kind your grandchildren will watch and feel something.
              That&apos;s what I&apos;m here to make for you.
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

      {/* ─── Gallery Grid ─────────────────────────────────────────────── */}
      <section className="bg-peach-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-dustyBlue-500 uppercase tracking-[0.3em] text-xs font-medium mb-3">
                Super 8 · 35mm Film
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-coral-600">
                San Diego Wedding Films
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

      {/* ─── What is Super 8 ──────────────────────────────────────────── */}
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
              Real Motion Picture Film
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-coral-600 mb-5">
              Why Super 8 for Your San Diego Wedding?
            </h2>
            <div className="w-12 h-px bg-coral-300 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: "/images/doodles/CampbellFilms_Icon_Dancing.png",
                iconW: 80,
                iconH: 64,
                title: "It Feels Like a Memory",
                body: "Super 8 has a warmth and texture that instantly feels nostalgic. The moment you watch it back, it already feels like something you've treasured for years. No digital video achieves that — not even close.",
              },
              {
                icon: "/images/doodles/CampbellFilms_Icon_Bells.png",
                iconW: 70,
                iconH: 64,
                title: "Real Film, Real Light",
                body: "Super 8 is shot on actual motion picture film, developed in a lab, and scanned frame by frame. San Diego's golden coastal light makes it sing — the colors are rich, the grain is beautiful, and every frame looks like a painting.",
              },
              {
                icon: "/images/doodles/CampbellFilms_Icon_WineGlass.png",
                iconW: 50,
                iconH: 72,
                title: "Something to Hand Down",
                body: "This isn't a video you watch once and forget. A Super 8 wedding film is the kind of thing your children will watch, and their children after them. It's a home movie in the truest sense.",
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
                <p className="text-olive-600 leading-loose text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── More Photos ──────────────────────────────────────────────── */}
      <section className="bg-peach-100 py-24 px-6">
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

      {/* ─── Pricing ──────────────────────────────────────────────────── */}
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
              San Diego Super 8 Film Pricing
            </h2>
            <div className="w-12 h-px bg-sage-500 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-sage-600/20 border border-sage-600/20 mb-10">
            {[
              {
                name: "Super 8 Film Only",
                price: "From $1,800",
                desc: "A full Super 8 wedding film — no photography included",
              },
              {
                name: "Film + Photos",
                price: "From $2,800",
                desc: "Super 8 wedding film + full-day 35mm photography",
              },
              {
                name: "Collection",
                price: "Custom",
                desc: "Multi-day, destination weddings, full analog collections",
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
              Super 8 Wedding Film FAQ
            </h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-sage-200 py-8 last:border-b">
                <h3 className="text-olive-800 font-medium text-base mb-3 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-olive-500 leading-loose text-sm">{faq.answer}</p>
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
            Let&apos;s make your San Diego wedding film
          </h2>
          <div className="w-12 h-px bg-sage-500 mx-auto" />
          <p className="text-peach-200/80 leading-loose text-base">
            Super 8 film dates book out quickly. Send a message to check
            availability — I&apos;d love to hear about your day.
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
          <p className="text-peach-200/50 text-xs pt-2">
            Based in San Diego · Available throughout Southern California &
            destination weddings worldwide
          </p>
        </div>
      </section>
    </>
  );
}
