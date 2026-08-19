import BackLink from "~/components/back-link";
import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import EventRouteSection from "~/sections/event-route-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import TimingsSection from "~/sections/timings-section";

const Content = () => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="The race" wavesColor="var(--color-cream)" />
    <BackLink href="/info" label="Event information" />
    <EventRouteSection />
    <Waves bottomColor="var(--color-pine)" topColor="var(--color-cream)" variant={3} />
    <TimingsSection />
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Plan your visit", href: "/info/getting-here" }}
      text="Now you know the route and timings, get ready for Boxing Day."
      title="Ready to get involved?"
    />
    <Waves bottomColor="var(--color-pine-dark)" topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const TheRacePage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default TheRacePage;
