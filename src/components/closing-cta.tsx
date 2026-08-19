import Section from "~/components/section";
import { Button } from "~/components/ui/button";

type CtaLink = { label: string, href: string };

type ClosingCtaProps = {
  title: string;
  text?: string;
  primary: CtaLink;
  secondary?: CtaLink;
};

const ClosingCta = ({ title, text, primary, secondary }: ClosingCtaProps) => (
  <Section palette="cream">
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="flex flex-col items-center gap-5 rounded-[2px] bg-pine p-8 text-center text-white shadow-[7px_7px_0_0_rgba(0,0,0,0.25)] sm:p-12">
        <h2 className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl leading-tight">
          {title}
        </h2>
        {
          text &&
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed">
              {text}
            </p>
        }
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <Button color="cream" href={primary.href} size="lg">
            {primary.label}
          </Button>
          {
            secondary &&
              <Button color="sun" href={secondary.href} size="lg">
                {secondary.label}
              </Button>
          }
        </div>
      </div>
    </div>
  </Section>
);

export default ClosingCta;
