import type { SurfaceColor } from "~/lib/surface-color";

const PALETTE_TEXT: Record<SurfaceColor, string> = {
  river: "text-river-contrast",
  cream: "text-cream-contrast",
  pine: "text-pine-contrast",
  "pine-dark": "text-cream",
  raft: "text-raft-contrast",
  sun: "text-sun-contrast"
};

/* The surface's highlight colour, shared by the eyebrow and the title accent:
   sun on the dark surfaces, pine on cream. Sun on cream would sit at ~1.5:1,
   and raft red reads as an alarm against so much warm cream; pine is the
   family green and clears 7:1. */
const ACCENT_TEXT: Record<SurfaceColor, string> = {
  cream: "text-pine",
  river: "text-sun",
  pine: "text-sun",
  "pine-dark": "text-sun",
  raft: "text-sun",
  // Raft on sun is 2.8:1; pine-dark is the accent that reads on yellow.
  sun: "text-pine-dark"
};

type HeadingProps = {
  palette?: SurfaceColor;
  subtitle?: string;
  title: string;
  /** Optional trailing words rendered in sun — "Three miles. One weir. [No engines.]" */
  titleAccent?: string;
  /** Centred introduces a stage (card grids, podiums, CTAs); left introduces
      reading (any section whose body is running prose). */
  align?: "center" | "left";
  className?: string;
};

const Heading = ({ palette = "river", subtitle, title, titleAccent, align = "center", className = "" }: HeadingProps) => {
  const titleContent = (
    <>
      {title}
      {titleAccent && <>{" "}<span className={ACCENT_TEXT[palette]}>{titleAccent}</span></>}
    </>
  );
  if (align === "left") {
    return (
      <div className={`flex flex-col items-start pb-6 text-left ${PALETTE_TEXT[palette]} ${className}`}>
        {
          subtitle &&
            <p className={`mb-3 label-caps text-xs ${ACCENT_TEXT[palette]}`}>
              {subtitle}
            </p>
        }
        <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight">{titleContent}</h2>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center pb-6 ${PALETTE_TEXT[palette]} ${className}`}>
      {
        subtitle &&
            <p className={`mb-3 label-caps text-xs text-center ${ACCENT_TEXT[palette]}`}>
              {subtitle}
            </p>
      }
      <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">{titleContent}</h2>
    </div>
  );
};

export default Heading;
