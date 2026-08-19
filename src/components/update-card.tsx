import logoSvg from "~/assets/images/logo.svg";
import SanityImage from "~/components/sanity-image";

const fallbackLogo = (logoSvg as { src?: string }).src ?? (logoSvg as unknown as string);

type UpdateCardProps = {
  title: string;
  description?: string;
  date?: string;
  href: string;
  image?: unknown;
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

const UpdateCard = ({ title, description, date, href, image }: UpdateCardProps) => {
  const formattedDate = formatDate(date);

  return (
    <a
      className="group/card flex h-full flex-col overflow-hidden rounded-[10px] border-[3px] border-cream-dark bg-paper shadow-[5px_5px_0_0_rgba(8,64,44,0.12)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(8,64,44,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      href={href}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-[2px] bg-cream">
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
