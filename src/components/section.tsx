import type { CSSProperties, ReactNode } from "react";

import Cloud from "~/components/shadows/cloud";
import Tree from "~/components/shadows/tree";
import Water from "~/components/shadows/water";
import type { SurfaceColor } from "~/lib/surface-color";

interface SectionProps {
  /** The same list the page header takes, so a page is one colour throughout. */
  color?: SurfaceColor;
  /** Set when nothing overlaps the top edge. The default top padding is short
      because a wave usually sits over it; without one the content reads as
      pinned to the top, so this matches the top space to the bottom. */
  openTop?: boolean;
  /** Drops the background shapes. For sections carrying photographs, where
      clouds and trees behind the grid are just noise. */
  plain?: boolean;
  children?: ReactNode;
}

const SURFACE: Record<SurfaceColor, string> = {
  cream: "bg-cream text-cream-contrast",
  river: "bg-river text-river-contrast",
  /* Cream, not white, on the greens and the red: the same pairing the page
     header uses, and the warmth is the point. */
  pine: "bg-pine text-cream",
  "pine-dark": "bg-pine-dark text-cream",
  raft: "bg-raft text-paper",
  sun: "bg-sun text-sun-contrast"
};

/* What sits on each ground: the link colour, the hairline, and the focus ring.
   Raft red is the link on cream, but it drops to about 2.5:1 on river, so the
   coloured grounds link in sun and rule in their own text colour. The focus
   ring sits just outside the control, on the ground, so it is chosen against
   the ground and clears 3:1 on every one. Components read the variables rather
   than naming a colour, so they work on any surface. */
const SURFACE_VARS: Record<SurfaceColor, CSSProperties> = {
  cream: {
    "--surface-link": "var(--color-raft)",
    "--surface-link-hover": "var(--color-raft-dark)",
    "--surface-rule": "color-mix(in oklab, var(--color-ink) 18%, transparent)",
    "--surface-focus": "var(--color-ink)"
  },
  river: {
    "--surface-link": "var(--color-sun)",
    "--surface-link-hover": "var(--color-sun-light)",
    "--surface-rule": "color-mix(in oklab, var(--color-cream) 35%, transparent)",
    "--surface-focus": "var(--color-cream)"
  },
  pine: {
    "--surface-link": "var(--color-sun)",
    "--surface-link-hover": "var(--color-sun-light)",
    "--surface-rule": "color-mix(in oklab, var(--color-cream) 30%, transparent)",
    "--surface-focus": "var(--color-sun)"
  },
  "pine-dark": {
    "--surface-link": "var(--color-sun)",
    "--surface-link-hover": "var(--color-sun-light)",
    "--surface-rule": "color-mix(in oklab, var(--color-cream) 28%, transparent)",
    "--surface-focus": "var(--color-sun)"
  },
  raft: {
    "--surface-link": "var(--color-sun)",
    "--surface-link-hover": "var(--color-sun-light)",
    "--surface-rule": "color-mix(in oklab, var(--color-paper) 35%, transparent)",
    "--surface-focus": "var(--color-cream)"
  },
  sun: {
    "--surface-link": "var(--color-pine-dark)",
    "--surface-link-hover": "var(--color-pine)",
    "--surface-rule": "color-mix(in oklab, var(--color-ink) 25%, transparent)",
    "--surface-focus": "var(--color-ink)"
  }
} as Record<SurfaceColor, CSSProperties>;

const SHADOW_COLOR: Record<SurfaceColor, string> = {
  cream: "var(--color-cream-dark)",
  river: "var(--color-river-dark)",
  pine: "var(--color-pine-dark)",
  "pine-dark": "color-mix(in oklab, var(--color-pine-dark) 80%, black)",
  raft: "var(--color-raft-dark)",
  sun: "var(--color-sun-dark)"
};

/* The shape that belongs to each ground: clouds over cream, water in the
   river, trees on the greens. The two accents carry nothing — they are loud
   enough on their own. */
const SHADOW_BY_SURFACE: Record<SurfaceColor, "tree" | "cloud" | "water" | null> = {
  cream: "cloud",
  river: "water",
  pine: "tree",
  "pine-dark": "tree",
  raft: null,
  sun: null
};

const SHADOWS = { tree: Tree, cloud: Cloud, water: Water };

const Section = ({ color = "river", openTop = false, plain = false, children }: SectionProps) => {
  const shadowKey = plain ? null : SHADOW_BY_SURFACE[color];
  const ShadowComponent = shadowKey ? SHADOWS[shadowKey] : null;
  const shadowColor = SHADOW_COLOR[color];

  return (
    <div className={`relative overflow-hidden ${openTop ? "pt-12" : "pt-8"} pb-12 ${SURFACE[color]}`} style={SURFACE_VARS[color]}>
      <div className="mx-auto w-full container px-4 relative z-[4]">
        {children}
      </div>
      {ShadowComponent && (
        <>
          <ShadowComponent
            color={shadowColor}
            style={{ position: "absolute", top: 1, left: 0, width: "15%", zIndex: 3 }}
          />
          <ShadowComponent
            color={shadowColor}
            style={{ position: "absolute", top: "10%", right: 0, width: "15%", zIndex: 3 }}
          />
          <ShadowComponent
            color={shadowColor}
            style={{ position: "absolute", bottom: "8%", left: "-10%", width: "15%", zIndex: 3 }}
          />
          <ShadowComponent
            color={shadowColor}
            style={{ position: "absolute", bottom: "13%", right: "-5%", width: "15%", zIndex: 3 }}
          />
        </>
      )}
    </div>
  );
};

export default Section;
