import Block from "~/components/block";
import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import Waves from "~/components/waves";
import type { VolunteerPageQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";

type Role = NonNullable<NonNullable<VolunteerPageQueryResult>["roles"]>[number];

type Props = { volunteerPage: VolunteerPageQueryResult };

const VolunteerRole = ({ role }: { role: Role }) => (
  <div className="flex flex-col gap-4 not-last:pb-12 not-last:border-b not-last:border-cream-dark">
    {role.title && (
      <h3 className="font-display font-bold text-2xl md:text-3xl">
        {role.title}
      </h3>
    )}
    {role.image && (
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
    )}
    {role.body && <Block value={role.body as never} />}
    {role.contactInstructions && (
      <div className="mt-2">
        <Block value={role.contactInstructions as never} />
      </div>
    )}
  </div>
);

const Content = ({ volunteerPage }: Props) => (
  <main>
    <InnerHeroSection headerOnly />
    <Section palette="cream">
      <Heading palette="cream" subtitle="How to help out" title="Volunteer" />
      <div className="mx-auto w-full max-w-4xl px-4 flex flex-col gap-12">
        {volunteerPage?.intro && <Block value={volunteerPage.intro as never} />}
        {volunteerPage?.roles?.map((role, idx) => (
          <VolunteerRole key={role.title ?? idx} role={role} />
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
