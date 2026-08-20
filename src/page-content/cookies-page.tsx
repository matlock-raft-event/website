import Block from "~/components/block";
import Footer from "~/components/footer";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import type { CookiesInfoQueryResult } from "~/lib/sanity.types";
import InnerHeroSection from "~/sections/inner-hero-section";

type Props = { cookiesInfo: CookiesInfoQueryResult };

const Content = ({ cookiesInfo }: Props) => (
  <main id="main" tabIndex={-1}>
    <InnerHeroSection eyebrow="How this site uses cookies" title="Cookies policy" />
    <Section palette="cream">
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
