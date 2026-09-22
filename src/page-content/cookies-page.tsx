import Block from "~/components/block";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import type { CookiesInfoQueryResult } from "~/lib/sanity.types";

type Props = { cookiesInfo: CookiesInfoQueryResult };

const Content = ({ cookiesInfo }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader color="pine-dark" contentWidth="text" eyebrow="How this site uses cookies" eyebrowStyle="plain" title="Cookies policy" />
    <Section palette="cream">
      {/* Same max-w-4xl reading width as the site's other text pages */}
      <div className="mx-auto w-full max-w-4xl px-4">
        {cookiesInfo?.content ? <Block value={cookiesInfo.content as never} /> : null}
      </div>
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
