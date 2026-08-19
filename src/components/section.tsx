import type { ReactNode } from "react";

import Cloud from "~/components/shadows/cloud";
import Tree from "~/components/shadows/tree";
import Water from "~/components/shadows/water";

/* The only allowed section surfaces — sun and raft are accents, ink is text.
   The page frame (header, closing, footer) is pine-dark, set directly. */
export type Palette = "cream" | "river" | "pine";

interface SectionProps {
  palette?: Palette;
  children?: ReactNode;
}

const PALETTE_BG: Record<Palette, string> = {
  river: "bg-river",
  cream: "bg-cream",
  pine: "bg-pine"
};

const PALETTE_SHADOW_COLOR: Record<Palette, string> = {
  river: "var(--color-river-dark)",
  cream: "var(--color-cream-dark)",
  pine: "var(--color-pine-dark)"
};

const SHADOW_BY_PALETTE: Record<Palette, "tree" | "cloud" | "water" | null> = {
  pine: "tree",
  cream: "cloud",
  river: "water"
};

const SHADOWS = { tree: Tree, cloud: Cloud, water: Water };

const Section = ({ palette = "river", children }: SectionProps) => {
  const shadowKey = SHADOW_BY_PALETTE[palette];
  const ShadowComponent = shadowKey ? SHADOWS[shadowKey] : null;
  const shadowColor = PALETTE_SHADOW_COLOR[palette];

  return (
    <div className={`relative overflow-hidden pt-[2em] pb-[3em] ${PALETTE_BG[palette]}`}>
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
