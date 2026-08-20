import logoSvg from "~/assets/images/logo.svg";
import SanityImage from "~/components/sanity-image";
import { resolveAssetSrc } from "~/lib/assets";

const fallbackLogo = resolveAssetSrc(logoSvg);

type UpdateCardProps = {
  title: string;
  description?: string;
  date?: string;
  href: string;
  image?: unknown;
  /** Degrees of tilt; keep within the design language's ±2.4° range. */
  tilt?: number;
};

const formatDate = (date?: string): string | undefined => {
  if (!date) return undefined;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};

/* A photo card, so it wears the photo radius and a hard shadow like the podium
   cards rather than the 10px panel radius of the stat tiles. Unlike those, it
   sits on cream: paper against cream is a ~9/255 step and the offset shadow
   only falls bottom-right, so without a border the top and left edges vanish.
   The tilt is the design language's pinned-photo rule; Tailwind's translate
   utilities compile to the `translate` property, so the hover lift composes
   with this rotate. */
const UpdateCard = ({ title, description, date, href, image, tilt = 0 }: UpdateCardProps) => {
  const formattedDate = formatDate(date);

  return (
    <a
      className="group/card flex h-full flex-col overflow-hidden rounded-[4px] border-[3px] border-cream-dark bg-paper shadow-card transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-1 hover:shadow-card-hard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      href={href}
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-cream">
        {
          image
            ? (
              <SanityImage
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                image={image}
                width={640}
              />
            )
            : (
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-contain p-10 opacity-80"
                loading="lazy"
                src={fallbackLogo}
              />
            )
        }
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        {
          formattedDate &&
            <p className="font-label text-xs uppercase tracking-wider text-ink-light">
              {formattedDate}
            </p>
        }
        <h3 className="font-display uppercase text-lg md:text-xl leading-tight line-clamp-2 text-ink">
          {title}
        </h3>
        {
          description &&
            <p className="line-clamp-3 text-sm leading-relaxed text-ink-light">
              {description}
            </p>
        }
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-label font-bold uppercase tracking-wide text-sm text-raft transition-all group-hover/card:gap-2.5">
          Read more
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
};

export default UpdateCard;
