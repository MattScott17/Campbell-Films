import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getShoot, getShoots, metaLine } from "@/lib/shoots";

export const dynamicParams = false;

export function generateStaticParams() {
  return getShoots().map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getShoot(slug);
  if (!s) return {};
  const where = s.place ? ` in ${s.place}` : "";
  const description = s.note ?? `${s.title}${where}, shot on 35mm film by Campbell Films.`;
  const url = `https://filmsbycampbell.com/portfolio/${s.slug}`;
  return {
    title: s.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${s.title} | Campbell Films`, description, url, type: "article", images: [{ url: s.cover }] },
    twitter: { card: "summary_large_image", title: `${s.title} | Campbell Films`, description, images: [s.cover] },
    robots: s.placeholder ? { index: false, follow: false } : undefined,
  };
}

export default async function ShootPage({ params }: Props) {
  const { slug } = await params;
  const shoots = getShoots();
  const i = shoots.findIndex((s) => s.slug === slug);
  if (i < 0) notFound();
  const s = shoots[i];
  const next = shoots.length > 1 ? shoots[(i + 1) % shoots.length] : null;
  const line = [metaLine(s), `${s.photos.length} photos`].filter(Boolean).join(" · ");

  return (
    <div className="pt-20 md:pt-16 pb-20 px-6">
      <article className="max-w-7xl mx-auto grid gap-6 md:gap-8">
        <Link
          href="/portfolio#wedding-photos"
          className="justify-self-start py-1 text-xs tracking-[0.16em] uppercase font-semibold text-olive-500 hover:text-olive-700"
        >
          ‹ All weddings
        </Link>

        <header className="grid gap-2.5 justify-items-center text-center">
          <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-olive-600">{line}</p>
          <h1 className="font-serif text-olive-500 text-6xl md:text-8xl leading-none text-balance">{s.title}</h1>
          <span className="w-12 h-px bg-mustard-600" />
          {s.note && <p className="max-w-[56ch] text-olive-700">{s.note}</p>}
        </header>

        <div className="columns-2 md:columns-3 gap-1.5 md:gap-3.5">
          {s.photos.map((src, n) => (
            <div key={src} id={`photo-${n + 1}`} className="shoot-photo mb-1.5 md:mb-3.5 break-inside-avoid scroll-mt-28">
              <Image
                src={src}
                alt={`${s.title}, photo ${n + 1}`}
                width={1200}
                height={1800}
                sizes="(min-width: 768px) 33vw, 50vw"
                priority={n < 3}
                className="w-full h-auto rounded-sm bg-peach-200"
              />
            </div>
          ))}
        </div>

        {next && (
          <footer className="border-t border-sage-200 pt-8 flex justify-center">
            <Link href={`/portfolio/${next.slug}`} className="group grid grid-cols-[64px_auto] md:grid-cols-[88px_auto] items-center gap-4 md:gap-5">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-sm bg-peach-200">
                <Image
                  src={next.cover}
                  alt=""
                  fill
                  sizes="88px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: next.coverFocus }}
                />
              </span>
              <span>
                <span className="block text-[11px] tracking-[0.16em] uppercase font-semibold text-olive-600">Next shoot</span>
                <span className="block font-serif text-olive-500 text-3xl md:text-4xl leading-tight">{next.title}</span>
              </span>
            </Link>
          </footer>
        )}
      </article>
    </div>
  );
}
