import Block from "~/components/block";
import Heading from "~/components/heading";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import type { AboutQueryResult } from "~/lib/sanity.types";

type Props = { about: AboutQueryResult };

const RnliSection = ({ about }: Props) => (
  <Section palette="mint">
    <Heading
      palette="mint"
      subtitle="Saving lives at sea with your support"
      title="RNLI"
    />
    <div className="flex flex-col items-center gap-4">
      {
        about?.rnliBio &&
                    <div className="mx-auto w-full max-w-4xl px-4">
                      <Block value={about.rnliBio as never} />
                    </div>
      }
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
