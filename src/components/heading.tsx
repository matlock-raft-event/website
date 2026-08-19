import type { Palette } from "./section";

const PALETTE_TEXT: Record<Palette, string> = {
  river: "text-river-contrast",
  cream: "text-cream-contrast",
  pine: "text-pine-contrast"
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
};

const Heading = ({ palette = "river", subtitle, title }: HeadingProps) => {
  return (
    <div className={`flex flex-col items-center pb-6 ${PALETTE_TEXT[palette]}`}>
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
