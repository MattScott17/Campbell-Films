import fs from "fs";
import path from "path";
import { SHOOTS, type ShootConfig } from "@/data/shoots";

export type Shoot = {
  slug: string;
  title: string;
  names: string;
  kind: string;
  place?: string;
  date?: string;
  note?: string;
  cover: string;
  coverFocus?: string;
  photos: string[];
  placeholder: boolean;
};

const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

function photosFor(cfg: ShootConfig): string[] {
  if (cfg.photos?.length) return cfg.photos;
  if (!cfg.folder) return [];
  const dir = path.join(process.cwd(), "public/images", cfg.folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/images/${cfg.folder}/${f}`);
}

function resolveCover(cfg: ShootConfig, photos: string[]): string {
  if (!cfg.cover) return photos[0];
  const match = photos.find((p) => p === cfg.cover || p.endsWith(`/${cfg.cover}`));
  return match ?? photos[0];
}

/** Placeholder shoots show on previews and locally, never on the live site. */
const showPlaceholders = process.env.VERCEL_ENV !== "production";

export function getShoots(): Shoot[] {
  return SHOOTS.filter((cfg) => showPlaceholders || !cfg.placeholder)
    .map((cfg): Shoot | null => {
      const all = photosFor(cfg);
      if (!all.length) return null;
      const cover = resolveCover(cfg, all);
      return {
        slug: cfg.slug,
        title: `${cfg.names}'s ${cfg.kind}`,
        names: cfg.names,
        kind: cfg.kind,
        place: cfg.place,
        date: cfg.date,
        note: cfg.note,
        cover,
        coverFocus: cfg.coverFocus,
        photos: [cover, ...all.filter((p) => p !== cover)],
        placeholder: Boolean(cfg.placeholder),
      };
    })
    .filter((s): s is Shoot => s !== null);
}

export function getShoot(slug: string): Shoot | undefined {
  return getShoots().find((s) => s.slug === slug);
}

export function metaLine(s: Pick<Shoot, "place" | "date">): string {
  return [s.place, s.date].filter(Boolean).join(" · ");
}
