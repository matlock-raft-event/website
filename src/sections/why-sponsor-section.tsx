import type { ReactNode } from "react";

import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import { GlobeIcon, LifebuoyIcon, MegaphoneIcon } from "@phosphor-icons/react";

type BenefitProps = {
  icon: ReactNode;
  title: string;
  text: string;
  /** Degrees of tilt; keep within the design language's ±2.4° range. */
  tilt?: number;
};

const Benefit = ({ icon, title, text, tilt = 0 }: BenefitProps) => (
  <div
    className="flex flex-row items-center gap-4 rounded-[10px] bg-paper px-5 py-4 shadow-card"
    style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
  >
    <div className="shrink-0 text-3xl text-river">
      {icon}
    </div>
    <div>
      <h3 className="font-display uppercase text-lg text-ink">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-ink/80">
        {text}
      </p>
    </div>
  </div>
);

/* The sponsorship pitch in the river pattern: copy on the left, what
   sponsors actually get on the right. Claims mirror the long-standing
   sponsors-page copy — posters/banners, website and socials, the RNLI. */
const WhySponsorSection = () => (
  <Section palette="river">
    <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 px-4">
      <Reveal className="text-left">
        <Heading
          align="left"
          className="!pb-0"
          palette="river"
          subtitle="Want to support the event?"
          title="Why sponsor"
          titleAccent="the race?"
        />
        <p className="mt-5 max-w-prose text-sm sm:text-base lg:text-lg leading-relaxed text-cream">
          The impact of our event and the funds we raise would not be possible
          without our fantastic sponsors &mdash; the local businesses that keep
          the raft event alive year after year.
        </p>
        <p className="mt-4 max-w-prose text-sm sm:text-base lg:text-lg leading-relaxed text-cream">
          Ready to make a difference and team up with us? Get in touch &mdash;
          let&apos;s make waves together and raise more than ever for the RNLI.
        </p>
        <div className="mt-7">
          <Button color="sun" href="/contact" size="lg">
            Become a sponsor
          </Button>
        </div>
      </Reveal>
      <Reveal className="flex flex-col gap-4 sm:gap-5">
        <Benefit
          icon={<MegaphoneIcon weight="duotone" />}
          text="Your logo on the posters and banners displayed in and around Matlock."
          tilt={-1.2}
          title="Seen around town"
        />
        <Benefit
          icon={<GlobeIcon weight="duotone" />}
          text="Featured on our website, with your own sponsor page, and across our social channels."
          tilt={1.4}
          title="Website & socials"
        />
        <Benefit
          icon={<LifebuoyIcon weight="duotone" />}
          text="Back Matlock's favourite Boxing Day tradition and support the RNLI."
          tilt={-1}
          title="A cause worth backing"
        />
      </Reveal>
    </div>
  </Section>
);

export default WhySponsorSection;
