import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import EventRouteSection from "~/sections/event-route-section";
import TimingsSection from "~/sections/timings-section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/info", label: "Event information" }} title="The race" />
    <EventRouteSection />
    <TimingsSection />
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

const TheRacePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default TheRacePage;
