import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import EventRouteSection from "~/sections/event-route-section";
import FaqsSection from "~/sections/faqs-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import TimingsSection from "~/sections/timings-section";
import type { FaqsQueryResult } from "~/lib/sanity.types";

type Props = { faqs: FaqsQueryResult };

const Content = ({ faqs }: Props) => (
  <main>
    <InnerHeroSection wavesColor="var(--color-green)" />
    <EventRouteSection />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-green)" variant={3} />
    <TimingsSection />
    <FaqsSection faqs={faqs} />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const InfoPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default InfoPage;
