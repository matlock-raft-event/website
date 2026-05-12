import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import useSanityFetch from "~/hooks/useSanityFetch";

type AboutData = {
  bio?: unknown;
  rnliBio?: unknown;
  rnliLink?: string;
  dasacBio?: unknown;
  dasacLink?: string;
};

const AboutSection = () => {
  const { data: about } = useSanityFetch<AboutData>(
    "*[_type == \"about\"][0]{ bio, rnliBio, rnliLink, dasacBio, dasacLink }"
  );

  return (
    <Section palette="cream">
      <Heading
        palette="cream"
        subtitle="It all started in 1961"
        title="What is The Matlock Raft Event?"
      />
      {
        about?.bio &&
                <div className="mx-auto w-full max-w-4xl px-4">
                  <Block value={about.bio as never} />
                </div>
      }
    </Section>
  );
};

export default AboutSection;
