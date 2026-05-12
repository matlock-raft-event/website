import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import type { CookiesInfoQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/InnerHeroSection";

type Props = { cookiesInfo: CookiesInfoQueryResult };

const Content = ({ cookiesInfo }: Props) => (
  <main>
    <InnerHeroSection />
    <Section palette="cream">
      <Heading palette="cream" title="Cookies Policy" />
      {cookiesInfo?.content ? <Block value={cookiesInfo.content as never} /> : null}
    </Section>
    <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" />
    <Footer />
  </main>
);

const CookiesPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default CookiesPage;
