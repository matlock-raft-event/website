import Block from "~/components/block";
import Heading from "~/components/heading";
import Reveal from "~/components/reveal";
import Section from "~/components/section";
import StoryRow from "~/components/story-row";
import type { AboutQueryResult } from "~/lib/sanity.types";
import { splitStory } from "~/lib/story";

type Props = { about: AboutQueryResult };

/* The story is body copy people read to the end, so it sets a step larger than
   the default paragraph size. */
const BODY = "[&_p]:text-base md:[&_p]:text-lg";

const AboutSection = ({ about }: Props) => {
  const photos = about?.storyPhotos ?? [];
  const story = splitStory(about?.bio);

  /* No photos, or nothing to split: the page reads as a single block, as it
     always has. */
  if (photos.length === 0 || !story.split) {
    return (
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
  }

  return (
    <Section color="river" plain>
      <div className="mx-auto w-full max-w-5xl px-4">
        <Heading
          align="left"
          palette="river"
          subtitle="It all started in 1961"
          title="What is The Matlock Raft Event?"
        />
        <div className="flex flex-col gap-14 md:gap-20">
          {
            story.sections.map((section, index) => {
              const photo = photos[index];
              return (
                <Reveal key={section.title ?? "intro"}>
                  <StoryRow
                    alt={photo?.alt ?? undefined}
                    caption={photo?.caption ?? undefined}
                    flip={index % 2 === 1}
                    photo={photo?.image}
                  >
                    {
                      section.title &&
                        <h3 className="pb-3 font-display uppercase text-2xl sm:text-3xl lg:text-4xl leading-tight">
                          {section.title}
                        </h3>
                    }
                    <div className={BODY}>
                      <Block startLevel={4} value={section.body as never} />
                    </div>
                  </StoryRow>
                </Reveal>
              );
            })
          }
          {
            story.closing.length > 0 &&
              <Reveal>
                <div className={`border-t border-(--surface-rule) pt-8 ${BODY}`}>
                  <Block startLevel={4} value={story.closing as never} />
                </div>
              </Reveal>
          }
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
