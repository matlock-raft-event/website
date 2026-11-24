import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import EventRouteSection from "~/sections/event-route-section";
import type { EventFacts } from "~/lib/event";
import TimingsSection from "~/sections/timings-section";

type Props = { facts: EventFacts };

const Content = ({ facts }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/info", label: "Event information" }} title="The race" />
    <EventRouteSection />
    <TimingsSection facts={facts} />
    <ClosingCta
      waveTopColor="var(--color-river)"
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Plan your visit", href: "/info/getting-here" }}
      text="Now you know the route and timings, get ready for Boxing Day."
      title="Ready to get involved?"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const TheRacePage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default TheRacePage;
