import Block from "~/components/block";
import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import type { CookiesInfoQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";

type Props = { cookiesInfo: CookiesInfoQueryResult };

const Content = ({ cookiesInfo }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection title="Cookies policy" />
    <Section palette="cream">
      <Heading align="left" className="mx-auto max-w-4xl px-4" palette="cream" subtitle="How this site uses cookies" title="Cookies Policy" />
      {cookiesInfo?.content ? <Block value={cookiesInfo.content as never} /> : null}
    </Section>
    <Footer />
  </main>
);

const CookiesPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default CookiesPage;
