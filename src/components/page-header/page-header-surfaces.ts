import type { CSSProperties } from "react";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "~/components/ui/button";

export type PageHeaderColor = "river" | "pine" | "pine-dark" | "raft" | "sun";

type SurfaceVars = {
  /** Dots and wallpaper text: the ground's own shade, never a new colour. */
  "--header-pattern": string;
  /** The second stripe, one step darker (or lighter) than the ground. */
  "--header-stripe": string;
  /** The title's hard shadow, in em so it scales with the title. */
  "--header-title-shadow": string;
  /** Plain eyebrow text. */
  "--header-accent": string;
  "--header-sticker": string;
  "--header-sticker-ink": string;
  "--header-ribbon": string;
  "--header-ribbon-ink": string;
};

type ButtonColor = NonNullable<VariantProps<typeof buttonVariants>["color"]>;

type Surface = {
  /** Ground and title colour. */
  className: string;
  vars: SurfaceVars;
  /** The back link's colour: cream on dark grounds, pine on sun. */
  backLinkColor: ButtonColor;
};

/** A hard drop in a darkened shade of the ground. */
const darkTitleShadow = (shade: string, amount: string) =>
  `0 0.045em 0 color-mix(in oklab, ${shade} ${amount}, black)`;

/* One entry per colour: the ground, and every colour that sits on it.
   The parts only read the custom properties, so a new colour is one entry
   here and nothing else. */
const SURFACES: Record<PageHeaderColor, Surface> = {
  river: {
    className: "bg-river text-cream",
    vars: {
      "--header-pattern": "color-mix(in oklab, var(--color-pine-dark) 38%, transparent)",
      "--header-stripe": "color-mix(in oklab, var(--color-river) 85%, var(--color-river-dark))",
      "--header-title-shadow": darkTitleShadow("var(--color-river-dark)", "60%"),
      "--header-accent": "var(--color-sun)",
      "--header-sticker": "var(--color-sun)",
      "--header-sticker-ink": "var(--color-sun-contrast)",
      "--header-ribbon": "var(--color-raft)",
      "--header-ribbon-ink": "var(--color-raft-contrast)"
    },
    backLinkColor: "cream"
  },
  pine: {
    className: "bg-pine text-cream",
    vars: {
      "--header-pattern": "color-mix(in oklab, var(--color-pine-dark) 75%, transparent)",
      "--header-stripe": "color-mix(in oklab, var(--color-pine) 80%, var(--color-pine-dark))",
      "--header-title-shadow": darkTitleShadow("var(--color-pine-dark)", "55%"),
      "--header-accent": "var(--color-sun)",
      "--header-sticker": "var(--color-sun)",
      "--header-sticker-ink": "var(--color-sun-contrast)",
      "--header-ribbon": "var(--color-raft)",
      "--header-ribbon-ink": "var(--color-raft-contrast)"
    },
    backLinkColor: "cream"
  },
  "pine-dark": {
    className: "bg-pine-dark text-cream",
    vars: {
      "--header-pattern": "color-mix(in oklab, var(--color-pine) 85%, transparent)",
      "--header-stripe": "color-mix(in oklab, var(--color-pine-dark) 75%, var(--color-pine))",
      "--header-title-shadow": darkTitleShadow("var(--color-pine-dark)", "40%"),
      "--header-accent": "var(--color-sun)",
      "--header-sticker": "var(--color-sun)",
      "--header-sticker-ink": "var(--color-sun-contrast)",
      "--header-ribbon": "var(--color-raft)",
      "--header-ribbon-ink": "var(--color-raft-contrast)"
    },
    backLinkColor: "cream"
  },
  raft: {
    className: "bg-raft text-paper",
    vars: {
      "--header-pattern": "color-mix(in oklab, var(--color-raft-dark) 70%, transparent)",
      "--header-stripe": "color-mix(in oklab, var(--color-raft) 85%, var(--color-raft-dark))",
      "--header-title-shadow": darkTitleShadow("var(--color-raft-dark)", "60%"),
      "--header-accent": "var(--color-sun)",
      "--header-sticker": "var(--color-sun)",
      "--header-sticker-ink": "var(--color-sun-contrast)",
      "--header-ribbon": "var(--color-pine-dark)",
      "--header-ribbon-ink": "var(--color-cream)"
    },
    backLinkColor: "cream"
  },
  // The one light ground: a dark title with a paper offset, like a two-colour print.
  sun: {
    className: "bg-sun text-pine-dark",
    vars: {
      "--header-pattern": "color-mix(in oklab, var(--color-sun-dark) 60%, transparent)",
      "--header-stripe": "color-mix(in oklab, var(--color-sun) 70%, var(--color-sun-dark))",
      "--header-title-shadow": "0.035em 0.04em 0 var(--color-paper), 0.06em 0.075em 0 rgb(8 64 44 / 0.3)",
      "--header-accent": "var(--color-raft)",
      "--header-sticker": "var(--color-raft)",
      "--header-sticker-ink": "var(--color-raft-contrast)",
      "--header-ribbon": "var(--color-pine-dark)",
      "--header-ribbon-ink": "var(--color-cream)"
    },
    backLinkColor: "pine"
  }
};

export const surfaceFor = (color: PageHeaderColor) => {
  const { className, vars, backLinkColor } = SURFACES[color];
  return { className, style: vars as CSSProperties, backLinkColor };
};
