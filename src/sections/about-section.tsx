import Block from "~/components/block";
import Heading from "~/components/heading";
import Section from "~/components/section";
import type { AboutQueryResult } from "~/lib/sanity.types";

type Props = { about: AboutQueryResult };

const AboutSection = ({ about }: Props) => (
  <Section color="river" plain>
    <div className="mx-auto w-full max-w-5xl px-4">
      <Heading
        align="left"
        palette="river"
        subtitle="It all started in 1961"
        title="What is The Matlock Raft Event?"
      />
      {about?.bio && <Block value={about.bio as never} />}
    </div>
  </Section>
);

export default AboutSection;
