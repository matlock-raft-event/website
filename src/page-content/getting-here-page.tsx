import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import { Para, Subheading } from "~/components/prose";
import Section from "~/components/section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/info", label: "Event information" }} eyebrow="Travel & parking" title="Getting here" />
    <Section color="river" plain>
      <div className="mx-auto w-full max-w-5xl px-4">
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
    <Footer waveTopColor="var(--color-river)" />
  </main>
);

const GettingHerePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default GettingHerePage;
