import SanityImage from "~/components/sanity-image";

type PhotoTileProps = {
  href: string;
  /** A Sanity image, or a plain src for the build-time gallery pictures. */
  image?: unknown;
  src?: string;
  /** Goes with `src`, for pictures run through Astro's image pipeline. */
  srcSet?: string;
  sizes?: string;
  /** Sits in the middle of the tile, in display type. */
  title: string;
  /** One line under the title, saying where the tile goes. */
  subtitle?: string;
  /** Defaults to 4:3; the wide tile at the end of a grid overrides it. */
  aspect?: string;
  /** Widest source the tile ever needs; a wide tile asks for more. */
  width?: number;
  className?: string;
};

/* The one way we put a photograph on a link: white card border, hard shadow,
   a scrim dark enough that the type reads on any picture, and the title in
   the middle of it. Photos never carry type without the scrim underneath. */
const PhotoTile = ({
  href,
  image,
  src,
  srcSet,
  sizes,
  title,
  subtitle,
  aspect = "4 / 3",
  width = 900,
  className = ""
}: PhotoTileProps) => (
  <a
    className={`group relative block overflow-hidden rounded-[4px] border-[6px] border-white bg-white shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-1 hover:shadow-[11px_11px_0_0_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--surface-focus) ${className}`}
    href={href}
  >
    {
      image
        ? (
          <SanityImage
            alt=""
            className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            image={image}
            style={{ aspectRatio: aspect, display: "block" }}
            width={width}
          />
        )
        : (
          <img
            alt=""
            className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            sizes={sizes}
            src={src}
            srcSet={srcSet}
            style={{ aspectRatio: aspect, display: "block" }}
          />
        )
    }
    <span
      aria-hidden="true"
      /* The title sits at the tile's middle, where the old 0.34 stop left
         cream at 2.2:1 over a bright photo. The floor is now high enough that
         the title clears 3:1 even over pure white. */
      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,26,18,0.75),rgba(4,26,18,0.55)_55%,rgba(4,26,18,0.62))]"
    />
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-4 text-center text-cream">
      <span className="font-display uppercase text-3xl md:text-4xl leading-none [text-shadow:0_0.045em_0_rgba(3,30,20,0.6)]">
        {title}
      </span>
      {
        subtitle &&
          <span className="inline-flex items-center gap-1.5 font-label font-bold uppercase tracking-wide text-sm transition-all group-hover:gap-2.5">
            {subtitle}
            <span aria-hidden="true">&rarr;</span>
          </span>
      }
    </span>
  </a>
);

export default PhotoTile;
