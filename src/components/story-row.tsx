import type { ReactNode } from "react";

import SanityImage from "~/components/sanity-image";

type StoryRowProps = {
  /** A Sanity image. Leave it out for a text-only row. */
  photo?: unknown;
  /** Describes the photo for people who can't see it. */
  alt?: string;
  /** Printed on the polaroid's white strip. */
  caption?: string;
  /** Puts the photo on the right at desktop widths. Stacked, the photo is always on top, left-aligned with the text. */
  flip?: boolean;
  children: ReactNode;
};

/* One beat of the story: a tilted polaroid beside the text. The tilt is
   decoration only (the tilt direction alternates with the side the photo is
   on), so nothing depends on it. The frame, the hard shadow and the radius
   are the same card language as the photo tiles and stat tiles. */
const StoryRow = ({ photo, alt, caption, flip = false, children }: StoryRowProps) => {
  if (!photo) {
    return <div className="max-w-2xl text-river-contrast">{children}</div>;
  }

  return (
    <div className={`grid items-center gap-8 md:gap-14 ${flip ? "md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"}`}>
      <figure
        className={`w-full max-w-sm rounded-[4px] bg-white px-3 pt-3 pb-4 shadow-card-hard md:max-w-none ${flip ? "md:order-2" : ""}`}
        style={{ transform: `rotate(${flip ? 2 : -2.5}deg)` }}
      >
        <SanityImage
          alt={alt}
          className="block w-full object-cover"
          image={photo}
          style={{ aspectRatio: "1 / 1" }}
          height={800}
          width={800}
        />
        {
          caption &&
            <figcaption className="mt-3 px-1 text-center label-caps text-xs leading-snug text-ink">
              {caption}
            </figcaption>
        }
      </figure>
      <div className="text-river-contrast">{children}</div>
    </div>
  );
};

export default StoryRow;
