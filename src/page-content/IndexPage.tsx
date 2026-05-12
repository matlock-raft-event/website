import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import GetInvolvedSection from "~/sections/GetInvolvedSection";
import HeroSection from "~/sections/HeroSection";
import PodiumSection from "~/sections/PodiumSection";
import SummarySection from "~/sections/SummarySection";
import UpdatesSection from "~/sections/UpdatesSection";
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
