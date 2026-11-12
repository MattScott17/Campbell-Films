/**
 * Wedding Photos, organized by shoot.
 *
 * To add a shoot:
 *   1. Make a folder: public/images/shoots/<slug>/ (for example public/images/shoots/nora-and-sam/)
 *      and put the shoot's photos in it. They show in filename order, so 01.jpg, 02.jpg... works well.
 *   2. Add an entry to the list below with the same slug and folder.
 *   3. Pick the cover with `cover` (a filename from that folder). It is shown first everywhere.
 *
 * Shoots show on the Portfolio page in the order they appear in this list, newest first is a good habit.
 * Each shoot also gets its own page at /portfolio/<slug>.
 *
 * Entries marked `placeholder: true` are examples built from photos already on the site. They show on
 * preview links but are hidden on the live site, so made-up names never go public. Delete them once
 * the real shoots are in.
 */

export type ShootConfig = {
  /** Used in the page link: filmsbycampbell.com/portfolio/<slug>. Lowercase words and dashes. */
  slug: string;
  /** The couple, as it should read in the title, e.g. "Nora & Sam". */
  names: string;
  /** Elopement, Engagement, Wedding, Garden Wedding... Title reads "<names>'s <kind>". */
  kind: string;
  /** Optional small line under the title, e.g. "Coronado" and "June 2026". */
  place?: string;
  date?: string;
  /** One or two sentences about the day. Shown under the photos and at the top of the shoot page. */
  note?: string;
  /** Folder under public/images that holds this shoot's photos. Every photo in it is used. */
  folder?: string;
  /** Or list exact photos (paths starting with /images/...). Used instead of `folder`. */
  photos?: string[];
  /** Cover photo: a filename in the folder, or a full /images/... path. Defaults to the first photo. */
  cover?: string;
  /** Where to aim the cover crop on phones, as CSS object-position, e.g. "center 30%". */
  coverFocus?: string;
  /** Example shoot. Shown on previews only, never on the live site. */
  placeholder?: boolean;
};

const WP = "/images/wedding-photos";

export const SHOOTS: ShootConfig[] = [
  // ---- PLACEHOLDERS: example shoots made from photos already on the site. Replace with Zoe's real shoots. ----
  {
    slug: "nora-and-sam",
    names: "Nora & Sam",
    kind: "Elopement",
    place: "Coronado",
    date: "June 2026",
    note: "A gazebo ceremony with just their closest people, then a walk down to the water after.",
    photos: [
      `${WP}/R1-03568-010A.JPG`, `${WP}/R1-03562-024A.JPG`, `${WP}/R1-03572-0019.JPG`, `${WP}/R1-03562-034A.JPG`,
      `${WP}/R1-03565-0028.JPG`, `${WP}/R1-03568-005A.JPG`, `${WP}/R1-03562-003A.JPG`, `${WP}/R1-03562-005A.JPG`,
      `${WP}/R1-03563-0036.JPG`, `${WP}/R1-03568-026A.JPG`, `${WP}/R1-03562-008A.JPG`,
    ],
    coverFocus: "center 30%",
    placeholder: true,
  },
  {
    slug: "ava-and-jordan",
    names: "Ava & Jordan",
    kind: "Garden Wedding",
    place: "Ojai",
    date: "May 2026",
    note: "Long tables under the trees and a dinner that ran well past sunset.",
    photos: [
      `${WP}/21395-6-0029.jpg`, `${WP}/21395-5-0013.jpg`, `${WP}/21395-1-0022.jpg`, `${WP}/21395-6-0028.jpg`,
      `${WP}/21395-5-0027.jpg`, `${WP}/21395-6-0031.jpg`, `${WP}/21395-6-0033.jpg`, `${WP}/21395-7-0009.jpg`,
    ],
    coverFocus: "center 60%",
    placeholder: true,
  },
  {
    slug: "maya-and-luis",
    names: "Maya & Luis",
    kind: "Backyard Wedding",
    place: "Encinitas",
    date: "April 2026",
    note: "Their own backyard, family everywhere, and flowers from a friend.",
    photos: [
      `${WP}/IMG_2997.JPG`, `${WP}/IMG_2983.JPG`, `${WP}/IMG_2988.JPG`, `${WP}/IMG_2986.JPG`,
      `${WP}/IMG_2992.JPG`, `${WP}/IMG_2993.JPG`, `${WP}/IMG_2998.JPG`,
    ],
    coverFocus: "center 35%",
    placeholder: true,
  },
  {
    slug: "claire-and-ben",
    names: "Claire & Ben",
    kind: "Wedding",
    place: "San Juan Capistrano",
    date: "March 2026",
    note: "Mission walls, palm trees and a big crowd for the send off.",
    photos: [
      `${WP}/R1-03959-006A.JPG`, `${WP}/IMG_3021.JPG`, `${WP}/IMG_3019.JPG`, `${WP}/IMG_3023.JPG`,
      `${WP}/R1-03561-0024.JPG`, `${WP}/R1-03566-0025.JPG`, `${WP}/R1-03573-0027.JPG`,
    ],
    coverFocus: "center 45%",
    placeholder: true,
  },
];
