import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://filmsbycampbell.com'),
  title: {
    default: "Campbell Films | Super 8 & Film Wedding Photography in Southern California",
    template: "%s | Campbell Films"
  },
  description: "Nostalgic Super 8 films and 35mm photography capturing the real, in-between moments of your wedding day. Based in San Diego, available for travel.",
  keywords: ["Super 8 film", "wedding videography", "film photography", "35mm photography", "Southern California wedding photographer", "San Diego wedding videographer", "analog photography", "film wedding", "elopement photography", "destination wedding"],
  authors: [{ name: "Campbell Films" }],
  creator: "Campbell Films",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://filmsbycampbell.com',
    siteName: 'Campbell Films',
    title: 'Campbell Films | Super 8 & Film Wedding Photography in Southern California',
    description: 'Nostalgic Super 8 films and 35mm photography capturing the real, in-between moments of your wedding day. Based in San Diego, available for travel.',
    images: [
      {
        url: '/OpenGraphImage_CF.png',
        width: 1200,
        height: 630,
        alt: 'Campbell Films',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campbell Films | Super 8 & Film Wedding Photography in Southern California',
    description: 'Nostalgic Super 8 films and 35mm photography capturing the real, in-between moments of your wedding day. Based in San Diego, available for travel.',
    images: ['/OpenGraphImage_CF.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Campbell Films',
    description: 'Super 8 film and 35mm film photography for weddings, elopements, and lifestyle sessions',
    url: 'https://filmsbycampbell.com',
    telephone: '+1-XXX-XXX-XXXX',
    email: 'zoe@filmsbycampbell.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressLocality: 'San Diego, California',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'California',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    priceRange: '$$',
    image: 'https://filmsbycampbell.com/favicon.png',
    sameAs: [
      'https://www.instagram.com/campbelll_films',
      'https://www.tiktok.com/@campbell.films',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.variable} ${raleway.className}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
