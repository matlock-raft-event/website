import Block from "~/components/block";
import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import Waves from "~/components/waves";
import type { VolunteerPageQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";

type Props = { volunteerPage: VolunteerPageQueryResult };

const Content = ({ volunteerPage }: Props) => (
  <main>
    <InnerHeroSection headerOnly />
    <Section palette="cream">
      <Heading palette="cream" subtitle="How to help out" title="Volunteer" />
      <div className="mx-auto w-full px-4 flex flex-col gap-12">
        <div>
          {volunteerPage?.intro && <Block value={volunteerPage.intro as never} />}
        </div>
        {volunteerPage?.roles?.map((role, idx) => (
          <div
            key={role.title ?? idx}
            className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-10 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex flex-col md:flex-1">
              {role.title && (
                <h3 className="font-display text-3xl md:text-4xl mb-4">
                  {role.title}
                </h3>
              )}
              {role.body && <Block value={role.body as never} />}
              {role.contactInstructions && (
                <div className="mt-2">
                  <Block value={role.contactInstructions as never} />
                </div>
              )}
            </div>
            {role.image && (
              <div className="md:flex-1">
                <SanityImage
                  alt={role.title ?? undefined}
                  image={role.image}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 360,
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const VolunteerPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default VolunteerPage;
