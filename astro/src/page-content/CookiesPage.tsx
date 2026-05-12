import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import useSanityFetch from "~/hooks/useSanityFetch";
import InnerHeroSection from "~/sections/InnerHeroSection";

type CookiesInfo = {
  content?: unknown;
};

const Content = () => {
  const { data } = useSanityFetch<CookiesInfo>(
    "*[_type == \"cookiesInfo\"][0]{ content }"
  );

  return (
    <main>
      <InnerHeroSection />
      <Section palette="cream">
        <Heading palette="cream" title="Cookies Policy" />
        {data?.content && <Block value={data.content as never} />}
      </Section>
      <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" />
      <Footer />
    </main>
  );
};

const CookiesPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default CookiesPage;
