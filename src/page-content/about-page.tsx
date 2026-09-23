import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import AboutSection from "~/sections/about-section";
import RnliSection from "~/sections/rnli-section";
import type { AboutQueryResult } from "~/lib/sanity.types";

type Props = { about: AboutQueryResult };

const Content = ({ about }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/info", label: "Event information" }} background="wallpaper" color="river" title="Our story" />
    <AboutSection about={about} />
    <RnliSection about={about} />
    <ClosingCta
      waveTopColor="var(--color-river)"
      primary={{ label: "Take part", href: "/take-part" }}
      secondary={{ label: "Donate", href: "/donate" }}
      text="Be part of Matlock's favourite Boxing Day tradition and help us raise more than ever for the RNLI."
      title="Join us this Boxing Day"
    />
    <Footer waveTopColor="var(--color-pine-dark)" />
  </main>
);

const AboutPage = ({ about }: Props) => (
  <PageShell>
    <Content about={about} />
  </PageShell>
);

export default AboutPage;
