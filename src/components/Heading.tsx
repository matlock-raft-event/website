import useResponsive from "~/hooks/useResponsive";

import type { Palette } from "./Section";

const PALETTE_TEXT: Record<Palette, string> = {
  mint: "text-mint-contrast",
  cream: "text-cream-contrast",
  red: "text-red-contrast",
  green: "text-green-contrast",
  yellow: "text-yellow-contrast",
  dark: "text-dark-contrast"
};

const Bullet = () => (
  <span>
    <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg">
            &#8226;
    </h6>
  </span>
);

type HeadingProps = {
  palette?: Palette;
  subtitle?: string;
  title: string;
};

const Heading = ({ palette = "mint", subtitle, title }: HeadingProps) => {
  const isMobile = useResponsive("down", "sm");

  return (
    <div className={`flex flex-col items-center pb-6 ${PALETTE_TEXT[palette]}`}>
      {
        subtitle &&
                <div className={`flex flex-row items-center mb-2 ${isMobile ? "gap-2" : "gap-4"}`}>
                  <Bullet />
                  <h6 className="font-serif font-medium text-sm sm:text-base md:text-lg text-center uppercase">{subtitle}</h6>
                  <Bullet />
                </div>
      }
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">{title}</h2>
    </div>
  );
};

export default Heading;
