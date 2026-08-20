import Waves from "~/components/waves";

interface InnerHeroSectionProps {
  /** Colour of the section below, i.e. the wave's incoming colour. */
  wavesColor?: string;
  /** For pages that provide their own hero: keep the h1 for structure only. */
  headerOnly?: boolean;
  title?: string;
  /** Trailing words rendered in sun, as on the section headings. */
  titleAccent?: string;
  /** Small caps line above the title — the eyebrow the section below used to carry. */
  eyebrow?: string;
}

/* The page masthead: a pine-dark block carrying the title, flowing into the
   section below on a wave.

   The top padding is not decorative — the header's badge hangs 98px below the
   bar on desktop (60px on mobile) and is centred, so a centred title has to
   start below it. */
const InnerHeroSection = ({
  wavesColor,
  headerOnly = false,
  title,
  titleAccent,
  eyebrow
}: InnerHeroSectionProps) => {
  if (headerOnly) {
    return title ? <h1 className="sr-only">{title}</h1> : null;
  }

  return (
    <div className="bg-pine-dark">
      <div className="mx-auto w-full container px-4 pt-20 pb-8 md:pt-32 md:pb-10">
        {
          eyebrow &&
            <p className="mb-3 label-caps text-xs text-center text-sun">
              {eyebrow}
            </p>
        }
        {
          title &&
            <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.97] text-cream text-center text-balance">
              {title}
              {titleAccent && <>{" "}<span className="text-sun">{titleAccent}</span></>}
            </h1>
        }
      </div>
      <Waves bottomColor={wavesColor} topColor="var(--color-pine-dark)" variant={3} />
    </div>
  );
};

export default InnerHeroSection;
