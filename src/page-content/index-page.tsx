import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import GetInvolvedSection from "~/sections/get-involved-section";
import HeroSection from "~/sections/hero-section";
import MarqueeSection from "~/sections/marquee-section";
import PodiumSection from "~/sections/podium-section";
import SummarySection from "~/sections/summary-section";
import UpdatesSection from "~/sections/updates-section";
import type {
  HeroQueryResult,
  SummaryQueryResult,
  WinnersQueryResult,
  UpdatesQueryResult,
} from "~/lib/sanity.types";

type Props = {
  hero: HeroQueryResult;
  summary: SummaryQueryResult;
  winners: WinnersQueryResult;
  updates: UpdatesQueryResult;
};

const Content = ({ hero, summary, winners, updates }: Props) => (
  <main>
    <HeroSection hero={hero} />
    <MarqueeSection />
    <SummarySection summary={summary} />
    <Waves
      bottomColor="var(--color-green)"
      style={{ marginTop: -1 }}
      topColor="var(--color-cream)"
      variant={2}
    />
    <PodiumSection winners={winners} />
    <Waves
      bottomColor="var(--color-yellow)"
      style={{ marginTop: -1 }}
      topColor="var(--color-green)"
      variant={3}
    />
    <GetInvolvedSection />
    <Waves
      bottomColor="var(--color-mint)"
      topColor="var(--color-yellow)"
      variant={4}
    />
    <UpdatesSection preview updates={updates} />
    <Waves bottomColor="var(--color-cream)" style={{ marginTop: -1 }} />
    <Footer />
  </main>
);

const IndexPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default IndexPage;
