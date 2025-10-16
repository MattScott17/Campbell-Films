import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View our Super 8 wedding films and 35mm film photography. Nostalgic, timeless imagery capturing real moments and emotions.",
  openGraph: {
    title: "Portfolio | Campbell Films",
    description: "View our Super 8 wedding films and 35mm film photography. Nostalgic, timeless imagery capturing real moments and emotions.",
    url: "https://filmsbycampbell.com/portfolio",
    type: "website",
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Campbell Films Portfolio',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Campbell Films",
    description: "View our Super 8 wedding films and 35mm film photography. Nostalgic, timeless imagery capturing real moments and emotions.",
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: "https://filmsbycampbell.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
