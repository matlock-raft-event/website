import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import ClosingCta from "~/components/closing-cta";
import ComingToWatchSection from "~/sections/coming-to-watch-section";
import GetInvolvedSection from "~/sections/get-involved-section";
import type { GetInvolvedImage } from "~/sections/get-involved-section";
import HeroSection from "~/sections/hero-section";
import type { Cancellation } from "~/sections/hero-section";
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
  getInvolvedImages?: GetInvolvedImage[];
  eventDate?: string;
  cancellation?: Cancellation;
};

const Content = ({
  hero,
  summary,
  winners,
  updates,
  heroImageSrc,
  heroImageSrcset,
  getInvolvedImages,
  eventDate,
  cancellation
}: Props) => (
  <main id="main" tabIndex={-1}>
    <HeroSection cancellation={cancellation} eventDate={eventDate} hero={hero} imgSrc={heroImageSrc} imgSrcset={heroImageSrcset} />
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
    <GetInvolvedSection images={getInvolvedImages} />
    <Waves
      bottomColor="var(--color-pine)"
      topColor="var(--color-river)"
      variant={4}
    />
    <ComingToWatchSection />
    <Waves
      bottomColor="var(--color-cream)"
      style={{ marginTop: -1 }}
      topColor="var(--color-pine)"
      variant={1}
    />
    <UpdatesSection preview updates={updates} />
    <ClosingCta
      primary={{ label: "Enter a raft", href: "/take-part" }}
      secondary={{ label: "Donate to the RNLI", href: "/donate" }}
      text="Do it once and we promise you'll be hooked. Build a raft, bring the family, and help Matlock raise a fortune for the lifeboats."
      title="See you on"
      titleAccent="the riverbank"
      waveTopColor="var(--color-cream)"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const IndexPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default IndexPage;
