import type { ReactNode } from "react";

import Cloud from "~/components/shadows/Cloud";
import Tree from "~/components/shadows/Tree";
import Water from "~/components/shadows/Water";

export type Palette = "mint" | "cream" | "red" | "green" | "yellow" | "dark";

interface SectionProps {
  palette?: Palette;
  children?: ReactNode;
}

const PALETTE_BG: Record<Palette, string> = {
  mint: "bg-mint",
  cream: "bg-cream",
  red: "bg-red",
  green: "bg-green",
  yellow: "bg-yellow",
  dark: "bg-dark"
};

const PALETTE_SHADOW_COLOR: Record<Palette, string> = {
  mint: "var(--color-mint-dark)",
  cream: "var(--color-cream-dark)",
  red: "var(--color-red-dark)",
  green: "var(--color-green-dark)",
  yellow: "var(--color-yellow-dark)",
  dark: "var(--color-dark-dark)"
};

const SHADOW_BY_PALETTE: Record<Palette, "tree" | "cloud" | "water" | null> = {
  green: "tree",
  yellow: "cloud",
  cream: "cloud",
  mint: "water",
  red: null,
  dark: null
};

const SHADOWS = { tree: Tree, cloud: Cloud, water: Water };

const Section = ({ palette = "mint", children }: SectionProps) => {
  const shadowKey = SHADOW_BY_PALETTE[palette];
  const ShadowComponent = shadowKey ? SHADOWS[shadowKey] : null;
  const shadowColor = PALETTE_SHADOW_COLOR[palette];

  return (
    <div className={`relative overflow-hidden pt-[2em] pb-[3em] ${PALETTE_BG[palette]}`}>
      <div className="mx-auto w-full max-w-6xl px-4 relative z-[4]">
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
