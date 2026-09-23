import Reveal from "~/components/reveal";
import { Button } from "~/components/ui/button";
import Waves from "~/components/waves";

type CtaLink = { label: string, href: string };

type ClosingCtaProps = {
  title: string;
  /** Optional trailing words rendered in sun — "See you on [the riverbank]" */
  titleAccent?: string;
  /** Small sun label above the title; defaults to the event facts line. */
  kicker?: string;
  text?: string;
  primary: CtaLink;
  secondary?: CtaLink;
  /** Colour of the section above — the closing brings its own seam wave. */
  waveTopColor?: string;
};

/* The page closing: part of the pine-dark frame, flowing straight into the
   footer. Matches the homepage's "See you on the riverbank" treatment. */
const ClosingCta = ({
  title,
  titleAccent,
  kicker = "Boxing Day · 11am · Free to watch",
  text,
  primary,
  secondary,
  waveTopColor = "var(--color-cream)"
}: ClosingCtaProps) => (
  <>
    <Waves bottomColor="var(--color-pine-dark)" topColor={waveTopColor} variant={3} />
    <div className="bg-pine-dark text-cream">
      <div className="mx-auto w-full container px-4 py-20 sm:py-24 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <p className="label-caps text-xs text-sun">
            {kicker}
          </p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.97]">
            {title}
            {
              titleAccent &&
                <>
                  {" "}
                  <span className="text-sun">{titleAccent}</span>
                </>
            }
          </h2>
          {
            text &&
              <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-cream/90">
                {text}
              </p>
          }
          <div className="mt-2 flex flex-row flex-wrap justify-center gap-4">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            {
              secondary &&
                <Button color="sun" href={secondary.href} size="lg">
                  {secondary.label}
                </Button>
            }
          </div>
        </Reveal>
      </div>
    </div>
  </>
);

export default ClosingCta;
