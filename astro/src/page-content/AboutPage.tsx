import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import AboutSection from "~/sections/AboutSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import RnliSection from "~/sections/RnliSection";
import type { AboutQueryResult } from "~/lib/sanity.types";

type Props = { about: AboutQueryResult };

const Content = ({ about }: Props) => (
  <main>
    <InnerHeroSection />
    <AboutSection about={about} />
    <Waves bottomColor="var(--color-mint)" topColor="var(--color-cream)" variant={2} />
    <RnliSection about={about} />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-mint)" variant={4} />
    <Footer />
  </main>
);

const AboutPage = ({ about }: Props) => (
  <PageShell>
    <Content about={about} />
  </PageShell>
);

export default AboutPage;
