import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import ComingToWatchSection from "~/sections/coming-to-watch-section";
import GetInvolvedSection from "~/sections/get-involved-section";
import HeroSection from "~/sections/hero-section";
import MarqueeSection from "~/sections/marquee-section";
import PodiumSection from "~/sections/podium-section";
import RaceSection from "~/sections/race-section";
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
  heroImageSrc?: string;
  heroImageSrcset?: string;
  eventDate?: string;
};

const Content = ({ hero, summary, winners, updates, heroImageSrc, heroImageSrcset, eventDate }: Props) => (
  <main id="main" tabIndex={-1}>
    <HeroSection eventDate={eventDate} hero={hero} imgSrc={heroImageSrc} imgSrcset={heroImageSrcset} />
    <MarqueeSection />
    <SummarySection summary={summary} />
    <Waves
      bottomColor="var(--color-river)"
      style={{ marginTop: -1 }}
      topColor="var(--color-cream)"
      variant={2}
    />
    <RaceSection summary={summary} />
    <Waves
      bottomColor="var(--color-pine)"
      style={{ marginTop: -1 }}
      topColor="var(--color-river)"
      variant={4}
    />
    <PodiumSection winners={winners} />
    <Waves
      bottomColor="var(--color-river)"
      style={{ marginTop: -1 }}
      topColor="var(--color-pine)"
      variant={3}
    />
    <GetInvolvedSection />
    <Waves
      bottomColor="var(--color-cream)"
      topColor="var(--color-river)"
      variant={4}
    />
    <ComingToWatchSection />
    <Waves
      bottomColor="var(--color-river)"
      style={{ marginTop: -1 }}
      topColor="var(--color-cream)"
      variant={1}
    />
    <UpdatesSection preview updates={updates} />
    <Waves bottomColor="var(--color-pine-dark)" style={{ marginTop: -1 }} variant={2} />
    <Footer />
  </main>
);

const IndexPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default IndexPage;
