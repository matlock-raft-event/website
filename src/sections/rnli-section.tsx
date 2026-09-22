import Block from "~/components/block";
import Heading from "~/components/heading";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import type { AboutQueryResult } from "~/lib/sanity.types";

type Props = { about: AboutQueryResult };

const RnliSection = ({ about }: Props) => (
  <Section palette="river">
    <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 px-4 text-river-contrast">
      <Heading
        align="left"
        palette="river"
        subtitle="Saving lives at sea with your support"
        title="RNLI"
      />
      {about?.rnliBio && <Block value={about.rnliBio as never} />}
      {
        about?.rnliLink &&
                    <Button
                      href={about.rnliLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                        Learn more about the RNLI
                    </Button>
      }
    </div>
  </Section>
);

export default RnliSection;
