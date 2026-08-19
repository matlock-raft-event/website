import type { Palette } from "./section";

const PALETTE_TEXT: Record<Palette, string> = {
  river: "text-river-contrast",
  cream: "text-cream-contrast",
  pine: "text-pine-contrast"
};

/* Eyebrow colour for the left-aligned variant: raft on light, sun on dark. */
const EYEBROW_TEXT: Record<Palette, string> = {
  cream: "text-raft",
  river: "text-sun",
  pine: "text-sun"
};

const Bullet = () => (
  <span aria-hidden="true" className="font-label font-medium text-sm sm:text-base md:text-lg">
    &#8226;
  </span>
);

type HeadingProps = {
  palette?: Palette;
  subtitle?: string;
  title: string;
  /** Centred introduces a stage (card grids, podiums, CTAs); left introduces
      reading (any section whose body is running prose). */
  align?: "center" | "left";
  className?: string;
};

const Heading = ({ palette = "river", subtitle, title, align = "center", className = "" }: HeadingProps) => {
  if (align === "left") {
    return (
      <div className={`flex flex-col items-start pb-6 text-left ${PALETTE_TEXT[palette]} ${className}`}>
        {
          subtitle &&
            <p className={`mb-3 font-label text-xs font-extrabold uppercase tracking-[0.2em] ${EYEBROW_TEXT[palette]}`}>
              {subtitle}
            </p>
        }
        <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight">{title}</h2>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center pb-6 ${PALETTE_TEXT[palette]} ${className}`}>
      {
        subtitle &&
                <div className="flex flex-row items-center mb-2 gap-2 sm:gap-4">
                  <Bullet />
                  <p className="font-label font-medium text-sm sm:text-base md:text-lg text-center uppercase">{subtitle}</p>
                  <Bullet />
                </div>
      }
      <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">{title}</h2>
    </div>
  );
};

export default Heading;
