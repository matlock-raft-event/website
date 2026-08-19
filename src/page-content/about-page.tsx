import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Waves from "~/components/waves";
import AboutSection from "~/sections/about-section";
import InnerHeroSection from "~/sections/inner-hero-section";
import RnliSection from "~/sections/rnli-section";
import type { AboutQueryResult } from "~/lib/sanity.types";

type Props = { about: AboutQueryResult };

const Content = ({ about }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="About The Matlock Raft Event" />
    <AboutSection about={about} />
    <Waves bottomColor="var(--color-river)" topColor="var(--color-cream)" variant={2} />
    <RnliSection about={about} />
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-river)" variant={4} />
    <ClosingCta
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Be part of Matlock's favourite Boxing Day tradition and help us raise more than ever for the RNLI."
      title="Join us this Boxing Day"
    />
    <Waves bottomColor="var(--color-pine-dark)" style={{ marginTop: -1 }} topColor="var(--color-cream)" variant={3} />
    <Footer />
  </main>
);

const AboutPage = ({ about }: Props) => (
  <PageShell>
    <Content about={about} />
  </PageShell>
);

export default AboutPage;
