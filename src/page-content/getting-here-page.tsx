import type { ReactNode } from "react";

import BackLink from "~/components/back-link";
import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import Waves from "~/components/waves";
import InnerHeroSection from "~/sections/inner-hero-section";

const Subheading = ({ children }: { children: string }) => (
  <h3 className="font-display text-xl md:text-2xl mt-10 first:mt-0">
    {children}
  </h3>
);

const Para = ({ children }: { children: ReactNode }) => (
  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
    {children}
  </p>
);

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Getting here" wavesColor="var(--color-cream)" />
    <BackLink href="/info" label="Event information" />
    <Section palette="cream">
      <Heading palette="cream" subtitle="Travel & parking" title="Getting Here" />
      <div className="mx-auto w-full max-w-4xl px-4">
        <Para>
          The event runs down the River Derwent from Matlock, through Matlock Bath, to the finish at
          Cromford Meadows. You can watch from anywhere along the way, so it&apos;s worth deciding
          where you&apos;d like to be before you set off.
        </Para>

        <Subheading>By car &amp; parking</Subheading>
        <Para>
          Town-centre car parks in Matlock and Matlock Bath are the most convenient, but they fill up
          fast on Boxing Day. Arrive early, or park a little further out and walk in. Expect the area
          around the river to be busy.
        </Para>

        <Subheading>Roads &amp; closures</Subheading>
        <Para>
          Some roads near the river can be closed or congested during the event, so allow extra time
          and follow any signage or marshals on the day.
        </Para>

        <Subheading>Public transport</Subheading>
        <Para>
          Matlock and Matlock Bath both have railway stations a short walk from the route. Boxing Day
          services are limited, so please check times with your operator before travelling.
        </Para>
      </div>
    </Section>
    <Waves bottomColor="var(--color-pine-dark)" topColor="var(--color-cream)" variant={2} />
    <Footer />
  </main>
);

const GettingHerePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default GettingHerePage;
