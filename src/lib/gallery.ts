import type { GalleryQueryResult } from "~/lib/sanity.types";

export type GalleryImage = GalleryQueryResult[number];

/** One year of the archive: the photos we hold, newest year first. */
export type GalleryYear = {
  year: string;
  images: GalleryImage[];
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
    .map(([year, yearImages]) => ({ year, images: yearImages }))
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
