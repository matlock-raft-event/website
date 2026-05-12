import type { ReactNode } from "react";
import { useMemo } from "react";
import type { PaletteColor } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import Cloud from "~/components/shadows/Cloud";
import Tree from "~/components/shadows/Tree";
import Water from "~/components/shadows/Water";

interface SectionProps {
  bgColor?: PaletteColor;
  children?: ReactNode;
}

const Section = ({
  bgColor,
  children
}: SectionProps) => {
  const theme = useTheme();

  const ShadowComponent = useMemo(() => {
    switch (bgColor) {
      case theme.palette.green:
        return Tree;
      case theme.palette.yellow:
      case theme.palette.secondary:
        return Cloud;
      case theme.palette.primary:
        return Water;
      default:
        return null;
    }
  },
  [bgColor]
  );

  return (
    <div
      className="relative overflow-hidden pt-[2em] pb-[3em]"
      style={{ backgroundColor: bgColor?.main ?? theme.palette.primary.main }}
    >
      <div
        className="mx-auto w-full max-w-6xl px-4"
        style={{
          position: "relative",
          zIndex: 4
        }}
      >
        {children}
      </div>
      {
        ShadowComponent !== null &&
                <>
                  <ShadowComponent
                    color={bgColor?.dark}
                    style={{
                      position: "absolute",
                      top: 1,
                      left: 0,
                      width: "15%",
                      zIndex: 3
                    }}
                  />
                  <ShadowComponent
                    color={bgColor?.dark}
                    style={{
                      position: "absolute",
                      top: "10%",
                      right: 0,
                      width: "15%",
                      zIndex: 3
                    }}
                  />
                  <ShadowComponent
                    color={bgColor?.dark}
                    style={{
                      position: "absolute",
                      bottom: "8%",
                      left: "-10%",
                      width: "15%",
                      zIndex: 3
                    }}
                  />
                  <ShadowComponent
                    color={bgColor?.dark}
                    style={{
                      position: "absolute",
                      bottom: "13%",
                      right: "-5%",
                      width: "15%",
                      zIndex: 3
                    }}
                  />
                </>
      }
    </div>
  );
};

export default Section;
