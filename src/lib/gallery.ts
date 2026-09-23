import type { GalleryQueryResult } from "~/lib/sanity.types";

export type GalleryImage = GalleryQueryResult[number];

/** One year of the archive: the photos we hold, newest year first. */
export type GalleryYear = {
  year: string;
  images: GalleryImage[];
};

/* A stand-in for randomness that never changes its mind: the same text always
   gets the same number (FNV-1a), so a year's order holds from one build to the
   next instead of reshuffling on every deploy. */
const stableHash = (text: string): number => {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

/* Lays two lists over the same length of page, each at even spacing, so the
   shorter one is dealt through the longer rather than bunched at one end. */
const interleave = (longer: GalleryImage[], shorter: GalleryImage[]): GalleryImage[] =>
  [
    ...longer.map((image, i) => ({ image, at: (i + 0.5) / longer.length, first: 0 })),
    ...shorter.map((image, i) => ({ image, at: (i + 0.5) / shorter.length, first: 1 }))
  ]
    .sort((a, b) => a.at - b.at || a.first - b.first)
    .map(({ image }) => image);

/* A year arrives in whatever order Sanity returns it, which is each
   photographer's set in one block, a burst of the same raft at a time. This
   shuffles each photographer's shots, then deals the sets into each other
   smallest first: two one-photo sets become a pair, the pair is dealt through
   the next set up, and so on. Every photographer ends up spread down the whole
   year, and a big set is broken up by everyone else's rather than left as a
   long run once the small ones are used up. */
const spreadEvenly = (images: GalleryImage[]): GalleryImage[] => {
  const byAuthor = new Map<string, GalleryImage[]>();

  for (const image of images) {
    const author = image.author ?? "";
    const existing = byAuthor.get(author);
    if (existing) existing.push(image);
    else byAuthor.set(author, [image]);
  }

  let sets = [...byAuthor.values()].map(shots =>
    [...shots].sort((a, b) => stableHash(a._id) - stableHash(b._id)));

  while (sets.length > 1) {
    sets.sort((a, b) => a.length - b.length || stableHash(a[0]._id) - stableHash(b[0]._id));
    const [smallest, next, ...rest] = sets;
    sets = [interleave(next, smallest), ...rest];
  }

  return sets[0] ?? [];
};

/* The year's cover leads, so it is both the tile on /gallery and the first
   photo on the year's page. Without a ticked cover, the first photo of the
   spread takes the tile. If two are ticked, the first in the spread wins. */
const coverFirst = (images: GalleryImage[]): GalleryImage[] => {
  const cover = images.find(image => image.cover);

  return cover ? [cover, ...images.filter(image => image !== cover)] : images;
};

/* The archive grows by a year every Boxing Day, so the gallery is an index of
   years and a page for each one, rather than every photo on a single page. */
export const galleryYears = (images: GalleryQueryResult | null): GalleryYear[] => {
  const byYear = new Map<string, GalleryImage[]>();

  for (const image of images ?? []) {
    const year = image.year?.toString();
    if (!year || !image.img) continue;

    const existing = byYear.get(year);
    if (existing) existing.push(image);
    else byYear.set(year, [image]);
  }

  return [...byYear.entries()]
    .map(([year, yearImages]) => ({ year, images: coverFirst(spreadEvenly(yearImages)) }))
    .sort((a, b) => Number(b.year) - Number(a.year));
};

/** "48 photos", or "1 photo" the year somebody only sent one. */
export const photoCount = (count: number): string => `${count} photo${count === 1 ? "" : "s"}`;

/* A Sanity asset reference carries the original's size — image-<hash>-2048x1401-jpg
   — so the grid can reserve each photo's shape before it loads, and nothing
   shifts underneath the reader. Falls back to 3:2 if a ref ever changes shape. */
export const galleryAspectRatio = (image: GalleryImage): string => {
  const ref = image.img?.asset?._ref ?? "";
  const size = /-(\d+)x(\d+)-/.exec(ref);

  return size ? `${size[1]} / ${size[2]}` : "3 / 2";
};

export const galleryAlt = (image: GalleryImage): string =>
  `Matlock Raft Event${image.year ? ` ${image.year}` : ""}${image.author ? `, photo by ${image.author}` : ""}`;
