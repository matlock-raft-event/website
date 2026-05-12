import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import AboutSection from "~/sections/about-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import RnliSection from "~/sections/rnli-section";
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
