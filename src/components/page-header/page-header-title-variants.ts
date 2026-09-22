import { cva } from "class-variance-authority";

/* The title is the loud thing. Most pages share one size so moving between
   them feels consistent; only long titles (mostly updates and sponsor names)
   step down, so they wrap to two or three lines rather than five. Each size
   scales with the viewport between a phone and a desktop bound. */
const pageHeaderTitleVariants = cva(
  "relative font-display leading-[0.92] uppercase text-balance [text-shadow:var(--header-title-shadow)]",
  {
    variants: {
      size: {
        default: "text-[clamp(3.375rem,9vw,7.75rem)]",
        long: "text-[clamp(2.75rem,7vw,6rem)]",
        "extra-long": "text-[clamp(2.25rem,5.6vw,5rem)]"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);

export default pageHeaderTitleVariants;
