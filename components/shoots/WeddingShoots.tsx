"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Shoot } from "@/lib/shoots";

const DOODLES = [
  "/images/doodles/CampbellFilms_Icon_shell.png",
  "/images/doodles/CampbellFilms_Icon_Birds.png",
  "/images/doodles/CampbellFilms_Icon_StarFish.png",
];
/** How many photos the phone cover swipes through before the "See all" card. */
const PREVIEW = 6;

const meta = (s: Shoot) => [s.place, s.date].filter(Boolean).join(" · ");
const shootHref = (s: Shoot, photoIndex = 0) =>
  photoIndex > 0 ? `/portfolio/${s.slug}#photo-${photoIndex + 1}` : `/portfolio/${s.slug}`;

/**
 * Wedding Photos tab. Computers get a story list (one big photo, a sideways strip),
 * phones get swipeable covers with dots. Both link to the same shoot page.
 */
export default function WeddingShoots({ shoots }: { shoots: Shoot[] }) {
  return (
    <>
      <div className="hidden md:block max-w-[920px] mx-auto">
        {shoots.map((s, i) => (
          <Fragment key={s.slug}>
            {i > 0 && <Divider doodle={DOODLES[(i - 1) % DOODLES.length]} />}
            <ShootStory shoot={s} />
          </Fragment>
        ))}
      </div>
      <div className="md:hidden grid gap-10">
        {shoots.map((s, i) => (
          <ShootCarousel key={s.slug} shoot={s} doodle={DOODLES[i % DOODLES.length]} />
        ))}
      </div>
    </>
  );
}

function Divider({ doodle }: { doodle: string }) {
  return (
    <div className="flex items-center gap-5 my-16" aria-hidden="true">
      <span className="flex-1 h-px bg-sage-200" />
      <Image src={doodle} alt="" width={44} height={44} className="w-11 h-auto opacity-90" />
      <span className="flex-1 h-px bg-sage-200" />
    </div>
  );
}

/* ---------------- Computer: story ---------------- */

function ShootStory({ shoot: s }: { shoot: Shoot }) {
  const line = meta(s);
  return (
    <section className="grid gap-[18px]">
      <div className="grid gap-1.5 justify-items-center text-center">
        {line && <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-olive-600">{line}</p>}
        <h2 className="font-serif text-olive-500 text-5xl lg:text-6xl leading-none text-balance">{s.title}</h2>
      </div>

      <Link href={shootHref(s)} className="group relative block aspect-[3/2] overflow-hidden rounded-sm bg-peach-200">
        <Image
          src={s.cover}
          alt={s.title}
          fill
          sizes="(min-width: 1024px) 920px, 90vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: s.coverFocus }}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-olive-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-1/2 bottom-5 -translate-x-1/2 translate-y-2 whitespace-nowrap text-xs tracking-[0.18em] uppercase font-semibold text-peach-50 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          View the shoot
        </span>
      </Link>

      <PhotoStrip shoot={s} />

      <div className="flex flex-wrap items-center justify-between gap-6 pt-0.5">
        {s.note && <p className="flex-1 basis-[300px] min-w-0 max-w-[54ch] text-olive-700 line-clamp-2">{s.note}</p>}
        <Link
          href={shootHref(s)}
          className="shrink-0 pb-1.5 border-b border-mustard-600 text-xs tracking-[0.16em] uppercase font-semibold text-olive-500 transition-colors hover:text-olive-700 hover:border-olive-700"
        >
          See all {s.photos.length} photos
        </Link>
      </div>
    </section>
  );
}

function PhotoStrip({ shoot: s }: { shoot: Shoot }) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 2);
    setAtEnd(el.scrollLeft > el.scrollWidth - el.clientWidth - 2);
  }, []);
  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.75, behavior: "smooth" });
  const fade = `linear-gradient(to right, ${atStart ? "#000" : "transparent"} 0, #000 28px, #000 calc(100% - 56px), ${atEnd ? "#000" : "transparent"} 100%)`;

  return (
    <div className="group/strip relative min-w-0">
      <div
        ref={ref}
        onScroll={sync}
        className="flex gap-2.5 overflow-x-auto snap-x snap-proximity no-scrollbar"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        {s.photos.slice(1).map((src, n) => (
          <Link
            key={src}
            href={shootHref(s, n + 1)}
            aria-label={`${s.title}, photo ${n + 2}`}
            className="relative flex-none h-32 aspect-[4/5] overflow-hidden rounded-sm bg-peach-200 snap-start transition-transform duration-300 hover:-translate-y-[3px]"
          >
            <Image src={src} alt="" fill sizes="110px" className="object-cover" />
          </Link>
        ))}
      </div>
      {!atStart && <StripArrow dir={-1} onClick={() => scroll(-1)} />}
      {!atEnd && <StripArrow dir={1} onClick={() => scroll(1)} />}
    </div>
  );
}

function StripArrow({ dir, onClick }: { dir: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir < 0 ? "Scroll photos left" : "Scroll photos right"}
      className={`absolute top-1/2 -translate-y-1/2 ${dir < 0 ? "left-2" : "right-2"} grid place-items-center w-9 h-9 rounded-full bg-peach-50 text-olive-500 text-xl leading-none shadow-md opacity-0 transition-opacity group-hover/strip:opacity-100 focus-visible:opacity-100`}
    >
      {dir < 0 ? "‹" : "›"}
    </button>
  );
}

/* ---------------- Phone: swipeable cover ---------------- */

function ShootCarousel({ shoot: s, doodle }: { shoot: Shoot; doodle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const preview = s.photos.slice(0, PREVIEW);
  const slides = preview.length + 1; // plus the "See all" card
  const line = meta(s);

  const onScroll = () => {
    const el = ref.current;
    if (el) setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <article className="grid gap-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-peach-200">
        <div
          ref={ref}
          onScroll={onScroll}
          className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain no-scrollbar"
        >
          {preview.map((src, j) => (
            <Link
              key={src}
              href={shootHref(s, j)}
              aria-label={`${s.title}, photo ${j + 1}`}
              className="relative flex-none w-full h-full snap-start snap-always"
            >
              <Image
                src={src}
                alt={j === 0 ? s.title : ""}
                fill
                sizes="100vw"
                priority={false}
                className="object-cover"
                style={j === 0 ? { objectPosition: s.coverFocus } : undefined}
              />
            </Link>
          ))}
          <Link
            href={shootHref(s)}
            className="flex-none w-full h-full snap-start snap-always grid place-content-center justify-items-center gap-3.5 p-6 text-center bg-olive-500 text-peach-50"
          >
            <Image src={doodle} alt="" width={64} height={64} className="w-16 h-auto brightness-0 invert opacity-85" />
            <span className="font-serif text-4xl leading-tight">{s.names}</span>
            <span className="border border-peach-50/60 rounded-sm px-3.5 py-2 text-[11px] tracking-[0.16em] uppercase font-semibold">
              See all {s.photos.length} photos
            </span>
          </Link>
        </div>

        <span
          className={`pointer-events-none absolute top-3 right-3 rounded-full bg-olive-800/55 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-peach-50 tabular-nums transition-opacity ${active >= preview.length ? "opacity-0" : "opacity-100"}`}
        >
          {Math.min(active + 1, preview.length)}/{preview.length}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5" aria-hidden="true">
          {Array.from({ length: slides }, (_, d) => (
            <i
              key={d}
              className={`block h-1.5 rounded-full shadow-[0_0_3px_rgba(52,54,40,.4)] transition-all duration-300 ${d === active ? "w-[18px] bg-peach-50" : "w-1.5 bg-peach-50/60"}`}
            />
          ))}
        </div>
      </div>

      <Link href={shootHref(s)} className="grid gap-1">
        <h2 className="font-serif text-olive-500 text-4xl leading-none">{s.title}</h2>
        {line && <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-olive-600">{line}</p>}
      </Link>
    </article>
  );
}
