import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's capture your story on film. Get in touch about wedding, elopement, or lifestyle photography with Super 8 and 35mm film.",
  openGraph: {
    title: "Contact | Campbell Films",
    description: "Let's capture your story on film. Get in touch about wedding, elopement, or lifestyle photography with Super 8 and 35mm film.",
    url: "https://filmsbycampbell.com/contact",
    type: "website",
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Contact Campbell Films',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Campbell Films",
    description: "Let's capture your story on film. Get in touch about wedding, elopement, or lifestyle photography with Super 8 and 35mm film.",
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: "https://filmsbycampbell.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-coral-600 mb-12 text-center">
          Let&apos;s Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 text-olive-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                Hi, I&apos;m Zoe. I&apos;m a photographer and Super 8 filmmaker based in
                Southern California. I love working with couples who want their
                memories to feel honest, real, and full of life and emotion. I shoot
                primarily on film to create nostalgic, candid images and videos that
                feel timeless and true to the moment. If that sounds like you,
                you&apos;re in the right place!
              </p>
              <p>
                When I&apos;m not shooting, I&apos;m usually outside. You&apos;ll find me camping,
                spending time at the beach, or diving into a new creative project
                like painting or crafting. Photography and art have always been a
                part of my life and being able to make a career out of it has
                brought me so much joy.
              </p>
              <p>
                I&apos;m so excited to hear about what you&apos;re planning. Put your info in
                or send me an email and from there you tell me a little about your
                story, your day, and what you want it to feel like.
              </p>
              <p className="font-medium text-coral-600">
                I&apos;ll be in touch soon
              </p>
            </div>

            <div className="pt-8 border-t border-sage-200">
              <h3 className="text-xl font-serif text-coral-600 mb-4">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:zoe@filmsbycampbell.com"
                    className="hover:text-coral-500 transition-colors"
                  >
                    zoe@filmsbycampbell.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Location:</span> San Diego /
                  Southern California
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-sage-50 p-8 rounded-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
