import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import EventRouteSection from "~/sections/EventRouteSection";
import FaqsSection from "~/sections/FaqsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import TimingsSection from "~/sections/TimingsSection";
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
